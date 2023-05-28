import React from 'react'
import { useState } from "react";

type FormPropsType = {
  set
}

//http://api.weatherapi.com/v1/current.json?key=c1c9c437aa154a06b2b14007231505&q=London&aqi=no

const Form = (props) => {


  return (
    <form action="">
      <input type="text" name='city' placeholder='都市名' onChange={e => props.setCity(e.target.value)} />
      {props.city}
   
      <button type='submit' onClick={props.getWeather}>天気を知る</button>
    </form>
  )
}

export default Form
