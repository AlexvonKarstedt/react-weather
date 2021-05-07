import React from 'react';
import axios from 'axios';
import Loader from "react-loader-spinner";

export default function Weather (props) {
    function showTemperature (response) {
      return(
alert (`The weather in ${response.data.name} is ${Math.round(response.data.main.temp)}℃`
)
      )   
    }
    let apiKey = "cbb6323d0382dcd07e77ddd98560a19c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(showTemperature);
return (
  <Loader
  type="ThreeDots"
  color= "purple"
  height={100}
  width={100}
  
/>
);
}