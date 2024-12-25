import axios from "axios";
import BoxWeater from "../../Componests/BoxWeater/BoxWeater";
import TodayWeather from "./../../Componests/TodayWeather/TodayWeather";
import { useEffect, useState } from "react";
import { WeatherApiResponse } from "./../../types/Weather.instanse";
// main variables thant not change
// week array that i will pasing it to child component that take day any give you the name of the day by arabic 
const week: string[] = [
  "الاحد",
  "الاثنين",
  "الثلاثاء",
  "الاربعاء",
  "الخميس",
  "الجمعه",
  "السبت",
];
// options that i will pass it to the child component to get the date and day in arabic
let options: { month: "short" | "numeric" | "2-digit" | "long" | "narrow"; day: "numeric" | "2-digit" } = {
  month: "short",
  day: "numeric",
};
export default function Home() {
  // state to store the data that return from the api and the city that the user search for
  const [data, setData] = useState<WeatherApiResponse| null>(null);
  const [city, setCity] = useState<string>("القاهرة");
// function to get the city that the user search for
  async function getCity(value: string) {
    let { data } = await axios.get(
      `https://api.weatherapi.com/v1/forecast.json?key=f64708755c8342898c612833242610&q=${value}&lang=ar&days=3`
    );
    setData(data);
    setCity(data.location.name);
    
  }
  useEffect(() => {
    // get the weather for the city that the user search for and  default city is in the state
    (async function get() {
      await getCity(city);
    })();
  }, []);
  // function to get the city that the user search for when he write in the input
  function handleSubmit(value: string): void {
    getCity(value);
  }
  return (
    <main className="p-4  home-section">
      <div className="container">
        <form
          className="search w-100  d-flex flex-row-reverse   gap-2 position-sticky "
          style={{ top: "95px", zIndex: "300" }}
        >
          <input
            id="search"
            onChange={(e) => handleSubmit(e.target.value)}
            type="search"
            dir="rtl"
            className="flex-grow-1 rounded-2 outline-2px outline-black rounded-pill  bg-scolor  p-3"
            placeholder="اكتب اسم المدينة"
            aria-label="city location"
          />
        </form>
        <article className="row row-cols-1 row-cols-lg-3 py-5 g-4  flex-row-reverse gx-4 align-items-stretch">
          <div>
            <TodayWeather
              data={data}
              city={city}
              week={week}
              options={options}
            />
          </div>
       { data? <> <div>
            <BoxWeater  data={data} index={1} week={week} options={options} />
          </div>
          <div>
            <BoxWeater data={data} index={2} week={week} options={options} />
          </div> </>: ""}
        </article>
      </div>
    </main>
  );
}
