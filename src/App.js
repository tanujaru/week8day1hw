

import "./App.css";
import sidebar from "./Components/sidebar"; 
import Counter from"./Components/Counter";


function App() {
  return(<div className="App"> <div className="maincont">
  <div className="side">Dashboard
      <h3>widget</h3>
      <h3>Reviews</h3>
      <h3>Customers</h3>
      <h3>Online Analyisis</h3>
      <h3>Settings</h3>
  </div>
  <div className="threediv">
  <div className="box1">Reviews<h1>1,282</h1></div>
  <div className="box2">Averag Rating<h1>4.6</h1></div>
  <div className="box3">Sentiment Analyisis<h1>960</h1><h1>122</h1><h1>321</h1></div>
  <div/>
  </div>
<span><div className="visitor">Website visitor<div className="inner"></div></div></span></div>) 
  
}

export default App;
