
import Title from './components/Title';
import Form from './components/Form';
import Results from './components/Results';

import { useState } from "react";


import './App.css';
import { response } from 'express';

type ResultsStateType = {
  country: string;
  cityName: string;
  temperature: string; 
  conditionText: string;
  icon: string;
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
    
  
  const getWeather = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch(`http://api.weatherapi.com/v1/current.json?key=c1c9c437aa154a06b2b14007231505&q=${city}&aqi=no`)
    .then(response => response.json() )
    .then(data => {console.log(data)
      setResults({
        country:data.location.country ,
        cityName: data.location.name,
        temperature:data.current.temp_c,
        conditionText:data.current.condition.text ,
        icon: data.current.condition.icon,
      });
    })
   }



  return (
    <div className="wrapper">
      <div className="container">
        <Title />
        <Form setCity={setCity} getWeather={getWeather} />
        <Results results={results}/>
      </div>
    </div>
  );
}

export default App;
