import React, { useState } from 'react';
import './App.css';

function App() {
  const [member, setMember] = useState({id:1, data: {name:'Gerardo'}})
  console.log(member);
  return (
    <div className="App">
      <h2>{member.data.name}</h2>
    </div>
  );
}

export default App;
