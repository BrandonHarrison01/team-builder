import React from 'react';
import './App.css';

import Form from './components/Form'

function App() {
  return (
    <div className="App">
      <h1>Team Builder</h1>
      {/* {teamMembers.map(member => <p>{member}</p>)} */}
      <Form />
    </div>
  );
}

export default App;
