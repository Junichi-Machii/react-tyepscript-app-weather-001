import React from "react";

type FormPropsType = {
  city:
  setCity: React.Dispatch<React.SetStateAction<string>>;
  getWeather: (e: React.FormEvent<HTMLFormElement>) => void;
};

//http://api.weatherapi.com/v1/current.json?key=c1c9c437aa154a06b2b14007231505&q=London&aqi=no

const Form = ({ setCity, getWeather}: FormPropsType) => {
  return (
    <form onSubmit={getWeather} >
      <input
        type="text"
        name="city"
        placeholder="都市名"
        onChange={(e) => setCity(e.target.value)}
      />

      <button  type="submit">天気を知る</button>
    </form>
  );
};

export default Form;
