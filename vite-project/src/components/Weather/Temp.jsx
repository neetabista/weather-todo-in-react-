import React, { useEffect, useState } from "react";
import Weathercard from "./Weathercard";

const Temp = () => {
  const [searchValue, setSearchValue] = useState("Kathmandu");
  const [temInfo, setTempInfo] = useState("");

  const getWeatherInfo = async () => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=30cd7115397f792b5aa6d3d1ab41abd2`;

      const res = await fetch(url);
      const data = await res.json();
      const { temp, humidity, pressure } = data.main;
      const { main: weathermood } = data.weather[0];
      const { country, sunset } = data.sys;
      const { name } = data;
      const { speed } = data.wind;

      const myNewWeatherInfo = {
        temp,
        humidity,
        pressure,
        weathermood,
        country,
        sunset,
        name,
        speed,
      };
      setTempInfo(myNewWeatherInfo);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getWeatherInfo();
  }, []);
  return (
    <>
      <section>
        <div className="wrapper">
          <div className="container">
            <h1>Weather Application</h1>
            <div className="search">
              <input
                type="text"
                placeholder="Search"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <button className="searchbtn" onClick={getWeatherInfo}>
                Search
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* our-temp-card  */}
      <Weathercard temInfo={temInfo} />
    </>
  );
};

export default Temp;
