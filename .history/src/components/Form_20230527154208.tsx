import React from 'react'
import { useS } from "react";

const Form = () => {
  return (
    <form action="">
      <input type="text" name='city' placeholder='都市名' />
      <button type='submit'>天気を知る</button>
    </form>
  )
}

export default Form