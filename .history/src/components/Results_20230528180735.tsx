import React from 'react'


type ResultsPropsType = {
  results: {
    country: string;
    cityName: string;
    temperature: string; 
    conditionText: string;
    icon: string;
  }
}

const Results = (props: ) => {
  return (
    <h1 className="">気象データ</h1>
  )
}

export default Results