import React, { useEffect, useState } from "react";

const Weathercard = ({ temInfo }) => {
  const [weatherState, setWeatherState] = useState({});
  const {
    temp,
    humidity,
    pressure,
    weathermood,
    country,
    sunset,
    name,
    speed,
  } = temInfo;

  useEffect(() => {
    if (weathermood) {
      switch (weathermood) {
        case "clouds":
          setWeatherState("wi-day-cloudy");
          break;
        case "haze":
          setWeatherState("wi-day-haze");
          break;
        case "clear":
          setWeatherState("wi-day-sunny");
          break;
        case "mist":
          setWeatherState("wi-day-fog");
          break;
        default:
          setWeatherState("wi-day-sunny");
          break;
      }
    }
  }, [weathermood]);

  // converting the seconds in the time
  let sec = sunset;
  let date = new Date(sec * 1000);
  let timeStr = `${date.getHours()}: ${date.getMinutes()}`;

  return (
    <>
      <div className="wrapper">
        <div className="weather-box-section">
          <div className="weather-box">
            <div className="box">
              <div className="icon">
                <i className={`wi ${weatherState}`}></i>
              </div>
            </div>
            <div className="weather-info">
              <div className="temoerature-section">
                <div className="temperature">
                  <span>{temp}&deg;</span>
                </div>
                <div className="description">
                  <div className="weathercondition">{weathermood}</div>
                  <div className="place">
                    {name},{country}
                  </div>
                </div>
              </div>
              <div className="date">{new Date().toLocaleString()}</div>
            </div>
          </div>
          {/* our 4column section  */}
          <div className="extra-temp">
            <div className="temp-info-minmax">
              <div className="two-sides-section">
                <p>
                  <i className={"wi wi-sunset"}></i>
                </p>
                <p className="extra-info-leftside">
                  {timeStr} PM
                  <br />
                  Sunset
                </p>
              </div>

              <div className="two-sides-section">
                <p>
                  <i className={"wi wi-humidity"}></i>
                </p>
                <p className="extra-info-leftside">
                  {humidity}
                  <br />
                  Humidity
                </p>
              </div>

              <div className="two-sides-section">
                <p>
                  <i className={"wi wi-rain"}></i>
                </p>
                <p className="extra-info-leftside">
                  {pressure}
                  <br />
                  presure
                </p>
              </div>

              <div className="two-sides-section">
                <p>
                  <i className={"wi wi-strong-wind"}></i>
                </p>
                <p className="extra-info-leftside">
                  {speed}
                  <br />
                  Speed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Weathercard;
