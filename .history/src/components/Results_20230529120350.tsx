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
       {props.results.c && <div> {props.results.country} </div>}
       {props.results.country && <div> {props.results.country} </div>}
       {props.results.country && <div> {props.results.country} </div>}
       {props.results.country && <div> {props.results.country} </div>}
    </div>
    )
};

export default Results;
