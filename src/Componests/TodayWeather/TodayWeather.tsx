import { useEffect, useState } from "react"
import { WeatherApiResponse } from './../../types/Weather.instanse';
// props that come from parent component (Home page)
type Props = {
  data: WeatherApiResponse | null;
  city: string;
  options: { month: "short" | "numeric" | "2-digit" | "long" | "narrow"; day: "numeric" | "2-digit" };
  week: string[];
}
 
   export default function TodayWeather({data,city,options,week}:Props) {
    // state to store the date and day
    const [engDate, setEnglishDate] = useState( new Date('2024-12-04'))
    const [date, setDate] = useState(engDate.toLocaleDateString('ar-SA',options)) //Arbic date
    const [day, setDay] = useState("السبت")
    useEffect(()=>{
          //  set the date and day  that is return from the api and any change in data will update the date and day
            setEnglishDate(new Date(data?.forecast.forecastday[0].date || '1970-01-01'));
            setDate(engDate.toLocaleDateString('ar-SA',options))
            setDay(week[engDate.getDay()])

    },[data])

    console.log(data)
  return (
    <>
         <div className="col p-0 shadow-lg bg-light rounded-2 ">
          <article className="today bg-scolor  text-capitalize">
            <p className="d-flex justify-content-between px-2 py-4 bg-dark-subtle  rounded-2 rounded-bottom-0">
              <span className="date-day">{date}</span>
              <span className="day">{day}</span>
            </p>
            <div className="content p-4 d-flex flex-column align-items-end gap-2" >
              <p className="city fw-bold fs-2">{city } - <span className="fs-3 text-dark">{data?.location.country}</span></p>
              <p className="todayTemp display-3 fw-bold text-uppercase">{data?data.current.temp_c:25}<sup>0</sup>c</p>
              <img id="today-img"  src={data?data.current.condition.icon:`https://cdn.weatherapi.com/weather/64x64/night/113.png`} alt="sunny day"/>
              <p className="info-day text-info">{data?data.current.condition.text:`مشمس`}</p>
              <div className="d-flex gap-3 justify-content-between align-items-center align-self-stretch mt-1">
                <p className="d-flex flex-column align-items-center gap-2">
                  <i className="fa-solid fa-umbrella  fa-xl"></i>
                  <span className="wind mt-2 d-block">{data?data.current.humidity:50}%</span>
                </p>
                <p className="d-flex flex-column align-items-center gap-2">
                  <i className="fa-solid fa-gauge fa-xl "></i>
                  <span className="wind-speed mt-2 d-block" >   {data?data.current.wind_kph:10.1} km\h</span>
                </p>
                <p className="d-flex flex-column align-items-center gap-2">
                  <i className="fa-regular fa-compass fa-xl"></i>
                  <span className=" wind-dir mt-2 d-block">{data?data.current.wind_dir:`sw`}</span>
                </p>
              </div>
            </div>
          </article>
        </div> 
    </>
  )
}
