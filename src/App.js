import React from 'react';
import './App.scss';
import { DatePicker, Space } from 'antd';


function App() {
   const test = (date, dateString) =>{
     console.log(date, dateString)
   }
  return (
    <div className="App">
      <h1>Web Personal - Client</h1>
      <h2>Proyecto</h2>
      <DatePicker onChange={test}/>
    </div>
  );
}

export default App;
