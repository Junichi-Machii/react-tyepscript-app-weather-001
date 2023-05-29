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
  return <h1 className="">気象データ {2 > 4 && <p>ただしい</p>}</h1>;
};

export default Results;
