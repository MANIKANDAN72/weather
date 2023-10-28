import React from "react";
import { useState } from "react"

function App() {
  let [input,setInput] = useState("")
  let [main,setMain] = useState("Clouds")
  let [description,setDescription] = useState("Broken Clouds")
  let [temp,setTemp] = useState("24")

  function getData() {

    let fetchstatus = fetch("https://api.openweathermap.org/data/2.5/weather?q="+ input +"&appid=ee949cc184264765ad2f53c854eb1a81").then(function(res){
    
    return res.json()
  })
        fetchstatus.then(function(data){
        let f = data.main.temp
        let c = f - 273.15;
        setMain(data.weather[0]["main"])
        setDescription(data.weather[0]["description"])
        setTemp(Math.floor(c))
    })
  }
    
  function change(e){
    setInput(e.target.value)

  }
  return (
    <div className="background">
      <div className="container">
        <h1 className="wheather">WEATHER</h1>
        <input type="text" className="Inputcls" placeholder="City Name" id='inputid' onChange={change}/><br/><br/>
        <button type="button" className="Inputcls submit" onClick={getData} > submit</button>
        <br/>
        <span className="getdata">{temp}°C </span>
        <span className="textdata">{main}, {description}</span>
      </div>
    </div>
  );
}

export default App;