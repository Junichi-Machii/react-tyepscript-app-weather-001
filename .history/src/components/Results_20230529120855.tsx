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
  return (
    <div>
       {props.results.country && <div> {props.results.country} </div>}
       {props.results.cityName && <div> {props.results.cityName} </div>}
       {props.results.temperature && <div> {props.results.temperature}<span>℃</span></div>}
       {props.results.conditionText &&  <div><img src={props.results.icon} alt="icon"/>  <s>{props.results.conditionText}</s> </div>}
       {props.results.icon && <div> {props.results.icon} </div>}
    </div>
    )
};

export default Results;
