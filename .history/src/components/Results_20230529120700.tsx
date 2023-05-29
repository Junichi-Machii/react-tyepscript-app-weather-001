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
       {props.results.temperature && <div> {props.results.temperature}<span </div>}
       {props.results.conditionText &&  <div> {props.results.conditionText} </div>}
       {props.results.icon && <div> {props.results.icon} </div>}
    </div>
    )
};

export default Results;
