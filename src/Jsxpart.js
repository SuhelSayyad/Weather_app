import React, { useEffect, useState } from 'react'
import { WiDayCloudy,WiDaySunny,WiHumidity,WiWindy,WiHorizon,WiWindDeg,WiSprinkle,WiSunset,WiTime2} from "react-icons/wi";
import "./Style.css";

export default function Jsxpart({tempinfo}) {
  const [weathermood,setweathermood]=useState(WiDaySunny);
    const{  temp,humidity,pressure,speed,main,name,country,sunset}=tempinfo;
   
    let sec=sunset;
    let date=new Date(sec * 1000);
    let timeStr= `${date.getHours()}:${date.getMinutes()}`;

  return (
    <>
  
      <div className="container">
        <div className="container2">
          <div className="logobox">
            {main==="Clear"? <WiDaySunny className='mainlogo'/>:(main==="Clouds"?<WiDayCloudy className='mainlogo'/>:(main==="Haze"?<WiSprinkle className='mainlogo'/>:WiDaySunny))}
    
           
          </div>
          <div className='infobox'>
            <div className="tempbox">
              <div className="temprature">
                <span>Temprature={temp}&deg; </span>
              </div>
              <br />
              <div className="condition">
                Wethermood={main}
              </div>
              <div className="location">
                <p><br /> Country={country}
                <br /> City ={name}</p>
               
              </div>
            </div>
            <div className="datebox">
              <div>
              {new Date().toLocaleString()}
              </div>
              <div>
                <WiTime2 className='timesymbol'/>
              </div>
            </div>
          </div>
          <div className="bottomcontainer">
            <div className="b1">
              <div className="b11">
                <p>{timeStr}PM
                  <br />
                  Sunset
                </p>
                <WiSunset className='smalllogo'/>
              </div>
              <div className="b12">
                <p>{humidity}
                  <br />
                  Humidity
                </p>
                <WiHumidity className='smalllogo'/>
              </div>
            </div>
            <div className="b2">
              <div className="b11">
                <p>Pressure
                  <br />
                  {pressure}
                </p>
                <WiWindDeg className='smalllogo'/>
              </div>
              <div className="b12">
                <p>Wind
                  <br />
                  {speed}
                  <WiWindy className='smalllogo'/>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
  )
}
