import { useQuery } from "@tanstack/react-query";
import NewsBox from "../../Componests/NewsBox/NewsBox";
import axios from "axios";
import { useEffect, useState } from "react";
import articleNew from "../../types/New.type";
import Loader from "../../Componests/Loader/Loader";
import imgError from "../../assets/imgs/undraw_server-down_lxs9.svg";


export default function News() {
  // state to store the news that return from the api
  const [news, setNews] = useState<articleNew[]|null>(null)
  // function to get the news from the api  that it manage by tanstack/react-query
  async function getNews () {
    const options = {
      method: 'GET',
      url: 'https://arabic-news-api.p.rapidapi.com/cnnarabic',
      headers: {
        'x-rapidapi-key': 'a154be7c05msh82aa036e7debe18p1035a4jsnb6baa41aa515',
        'x-rapidapi-host': 'arabic-news-api.p.rapidapi.com'
      }
    };
    return  await axios.request(options)
  }
  const {data , isLoading, isError} = useQuery({
    queryKey:["news"],
    queryFn:getNews
  });
  useEffect(()=>{
    // set the news that return from the api and any change in data of news will update the news
    if(data){
      setNews(data.data.results);
    }
  },[data])
  // if the data is loading show the loader
  if(isLoading){
    return (
      <div className="  d-flex align-items-center justify-content-center" style={{minHeight:"70vh"}}>
        <Loader/>
      </div>
    )
  }
  // if there is an error show the error img
  if(isError){
    return (
      <figure className="  d-flex align-items-center justify-content-center" style={{minHeight:"70vh"}}>
        <img src={imgError} style={{height:"300px"}} alt=" Error Emg" />
      </figure>
    )
  }
  // if the data is coming show the news
  return (
    <>
        <section className="container flex flex-column gap-3 ">
        <h1 className="h1 text-center fs-2 fw-bold p-3 border-bottom border-3  border-secondary-subtle"> أخبار اليوم </h1>
        <div className="row row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-3 mt-3">
          {news?.map((article)=>{
            return (
              <a key={article.url}>
                <NewsBox article={article}/>
              </a>
            )
          })}
        </div>
        </section>
    
    </>
  )
}
