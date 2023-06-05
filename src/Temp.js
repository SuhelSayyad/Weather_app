import React, { useEffect, useState } from 'react'
import "./Style.css";
import Jsxpart from './Jsxpart';

export default function Temp() {
  const [searchvalue, setsearchvalue] = useState("Pune");
  const [tempinfo,settempinfo]= useState({});
  const getweatherinfo= async ()=>{
    try{
      let url =`https://api.openweathermap.org/data/2.5/weather?q=${searchvalue}&units=metric&appid=084a5fd3d336a1b461717b16d9fd8b17`;
      let res = await fetch(url);
      let data = await res.json();
      const {temp}=data.main;
      const {humidity}=data.main;
      const{pressure}=data.main;
      const{speed}=data.wind;
      const{main}=data.weather[0];
      const{name}=data;
      const{country,sunset}=data.sys;
      const currentwetharinfo={
        temp,humidity,pressure,speed,main,name,country,sunset,
      };
      settempinfo(currentwetharinfo);
     
    }
    catch(error){
      console.log(error);
    }

  };
  useEffect(()=>{
    getweatherinfo();
  } ,[])
  return (
    <>
      <div className='container1'>
        <input className='input' type='search' placeholder='Enter the city name?' value={searchvalue} onChange={(e) => setsearchvalue(e.target.value)}></input>
        <button className='btn' onClick={getweatherinfo}> search</button>
      </div>
      <Jsxpart tempinfo={tempinfo}/>
    </>
  )
}
