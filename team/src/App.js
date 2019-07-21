import React, { useState } from 'react';
import './App.css';

import { team } from './DummyData';
import Form from './components/Form'
import TeamMembers from './components/TeamMembers'

function App() {

  const [teamMembers, setTeamMember] = useState(team)

  const inputMember = newMember => {
    setTeamMember([...teamMembers, newMember])
  }



  return (
    <div className="App">
      <h1>Team Builder</h1>
      <div>
            {teamMembers.map(member => {
              return (
                <TeamMembers member={member} />
              )
            })}
        </div>
      <Form inputMember={inputMember} />
    </div>
  );
}

export default App;
