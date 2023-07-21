import React, { useState } from "react";
import "./App.css";
import ProfileCard from "./Components/ProfileCard";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [count, setCount] = useState(0);

  async function fetchData(count) {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${count}`
    );
    setData(response.data);
  }

  function addCount() {
    if(count<10){
    setCount(count + 1);
    fetchData(count + 1); 
    }
  }

  function decCount() {
    if(count>1){
    setCount(count - 1);
    fetchData(count - 1); 
    }
  }

  return (
    <div className="App">
      <h1>{count}</h1>
      {Object.keys(data).length > 0 && <ProfileCard {...data} />}
      <button
        style={{ backgroundColor: "red", borderRadius: 4, width: 70 }}
        onClick={decCount}
      >
        Prev
      </button>
      <button
        style={{ backgroundColor: "green", borderRadius: 4, width: 70, marginLeft:20 }}
        onClick={addCount}
      >
        Next
      </button>
    </div>
  );
}

export default App;
