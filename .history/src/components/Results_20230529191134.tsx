import React from "react";

type ResultsPropsType = {
  results: {
    country: string;
    cityName: string;
    temperature: string;
    conditionText: string;
    icon: string;
  };
};

const Results = (props: ResultsPropsType) => {
  const { country,cityName,temperature,conditionText,icon} = props.results;
  return (
    <div>
       {country && <div> {country} </div>}
       {cityName && <div> {cityName} </div>}
       {temperature && <div> {temperature}<span>℃</span></div>}
       {conditionText &&  <div><img src={icon} alt="icon"/><span>{props.results.conditionText}</span></div>}
    </div>
    )
};

export default Results;
