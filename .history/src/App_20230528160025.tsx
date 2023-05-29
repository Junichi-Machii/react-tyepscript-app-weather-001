
import Title from './components/Title';
import Form from './components/Form';
import Results from './components/Results';

import { useState } from "react";


import './App.css';

type ResultsStateType = {
  country: string,
  cityName: string,
  temperature: string, 
  conditionText: string,
  icon: string
}

function App() {

  const [ city, setCity ]  = useState<string>("");
  const [results, setResults] = useState<ResultsStateType>({
    country: "",
    cityName: "",
    temperature: "", 
    conditionText: "",
    icon: ""
  })
    
  
  const getWeather = (e: any) => {
    e.preventDefault();
    fetch("http://api.weatherapi.com/v1/current.json?key=c1c9c437aa154a06b2b14007231505&q=London&aqi=no")
    .then(res => res.json() )
    .then(data => {
      setResults({
        country: ,
        cityName: ",
        temperature: , 
        conditionText: "",
        icon: ""
      })
    })
   }



  return (
    <div className="test">
      <Title />
      <Form setCity={setCity} getWeather={getWeather} />
      <Results />
    </div>
  );
}

export default App;
