import React, { useState } from 'react';
import Form from './Form';
import './App.css';

function App() {
  // const [member, setMember] = useState({id:1, data: {name:()}})
  // console.log(member);
  return (
    <div className="App">
      <div className="member-list">
      <h2>Add Yourself to The List</h2>
      </div>
      <Form />
    </div>
  );
}

export default App;
