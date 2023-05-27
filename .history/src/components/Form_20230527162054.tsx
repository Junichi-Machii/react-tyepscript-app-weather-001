import React from 'react'
import { useState } from "react";

const Form = () => {

  const { city, setCity } = useState("");
  return (
    <form action="">
      <input type="text" name='city' placeholder='都市名' onChange={e setCity} />
      <button type='submit'>天気を知る</button>
    </form>
  )
}

export default Form