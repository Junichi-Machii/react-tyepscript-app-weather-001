import React from "react";

type FormPropsType = {
  setCity: React.Dispatch<React.SetStateAction<string>>;
  getWeather: (e: React.FormEvent<HTMLFormElement>) => void;
};

//http://api.weatherapi.com/v1/current.json?key=c1c9c437aa154a06b2b14007231505&q=London&aqi=no

const Form = (props: FormPropsType) => {
  return (
    <form onSubmit={props.getWeather} action="">
      <input
        type="text"
        name="city"
        placeholder="都市名"
        onChange={(e) => props.setCity(e.target.value)}
      />

      <button className="h-10 px-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-full focus:shadow-outline hover:bg-indigo-800" type="submit">天気を知る</button>
    </form>
  );
};

export default Form;
