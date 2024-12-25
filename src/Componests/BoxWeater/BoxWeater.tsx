import { useEffect, useState } from "react";
import { WeatherApiResponse } from "../../types/Weather.instanse";
// interface the  props that is return from the parent component
interface props {
    data: WeatherApiResponse | null;
    week: string[];
    options: { month: "numeric" | "2-digit" | "long" | "short" | "narrow"; day: "numeric" | "2-digit" };
    index:number;
}
export default function BoxWeater({data,week,options,index}:props) {
  // state to store the date and day
     const [engDate, setEnglishDate] = useState<Date>( new Date('2024-12-04'));
        const [_, setDate] = useState(engDate.toLocaleDateString('ar-SA',options)) //Arbic date
        const [day, setDay] = useState("السبت");

        useEffect(()=>{
          //  set the date and day  that is return from the api and any change in data will update the date and day
                setEnglishDate(new Date(data?.forecast.forecastday[index].date || '1970-01-01'));
                setDate(engDate.toLocaleDateString('ar-SA',options))
                setDay(week[engDate.getDay()])
            
        },[data])
      
  return (
    <>
         <div className="col p-0 shadow-lg h-100 bg-light rounded-2">
          <article  className=" bg-scolor  d-flex flex-column  text-capitalize">
            <p className="next-today text-center  px-2 py-4 bg-dark-subtle rounded-2 rounded-bottom-0" > {day}</p>
            <div className="content d-flex align-items-center flex-column justify-content-center flex-grow-1  ">
              <img src={data?.forecast.forecastday[index].day.condition.icon} alt="info img" className=" next-img info-img mb-4"/>
              <p className="next-today-max fw-bold  text-uppercase mb-0 fs-1">{data?.forecast.forecastday[index].day.maxtemp_c}<sup>o</sup>c</p>
              <span className="next-today-min fw-bold text-uppercase mb-4 fs-4">{data?.forecast.forecastday[index].day.mintemp_c}<sup>o</sup>c</span>
                <p className="info-next  text-info">{data?.forecast.forecastday[index].day.condition.text}</p>
            </div>
          </article>
        </div>
    </>
  )
}
