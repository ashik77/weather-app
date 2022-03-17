import React from 'react'

export default function ShowInfo(props) {

    const {WeatherText, Temperature} = props.data;

  return (
    <div>
        <p>{WeatherText}</p>
        <p>{Temperature?.Metric?.Value.toFixed()} &#8451;</p>
    </div>
  )
}
