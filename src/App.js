import "./styles.css";
// ye useState ek hooks hi hai
import React,{useState} from 'react'



export default function App() {
//    state,yha jo change krna hai vo aayega
  let [data,setData]=useState("Gourav");

  return (
    <div className="App">
      <h3>{data}</h3>
      <h1>Hooks in react</h1>
      {/* yha jese hi ham update button pr click karenge to ye Gourav ko change krnke Mittal kr dega  */}
      <button onClick={()=>setData("Mittal")}>Update data</button>
    </div>
  );
}
