import React, { useState } from 'react';
import Form from './Form';
import './App.css';

function App() {
  const [member, setMember] = useState({id:1, data: {name:'Gerardo'}})
  console.log(member);
  return (
    <div className="App">
      <div>
      <h2>{member.data.name}</h2>
      </div>
      <Form />
    </div>
  );
}

export default App;
