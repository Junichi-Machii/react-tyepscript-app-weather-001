import React from 'react'
import { useState } from "react";


//http://api.weatherapi.com/v1/current.json?key=c1c9c437aa154a06b2b14007231505&q=London&aqi=no

const Form = () => {

  const [ city, setCity ]  = useState<string>("");
  const getWeather = 
  return (
    <form action="">
      <input type="text" name='city' placeholder='都市名' onChange={e => setCity(e.target.value)} />
      {city}
   
      <button type='submit'>天気を知る</button>
    </form>
  )
}

export default Form