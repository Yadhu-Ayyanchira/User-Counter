import React,{useState} from 'react';
import './App.css';
import ProfileCard from './Components/ProfileCard'
import axios from 'axios';

function App() {
  const [count, setCount] = useState(0);
  function addCount(){
    setCount(count+1)
  }
  function decCount(){
    setCount(count-1)
  }
  const fetchData =async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    
  }


  return (
    <div className="App">
      <h1>1</h1>
      <ProfileCard/>
      <button onClick={decCount}>Prev</button>
      <button onClick={addCount}>Next</button>
    </div>
  );
}

export default App;
