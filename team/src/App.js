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

  const editMember = edit => {
    setTeamMember()
  }

  return (
    <div className="App">
      <h1>Team Builder</h1>
      {teamMembers.map(member => {
        return <TeamMembers member={member} editMember={editMember} />
      })}
      <Form inputMember={inputMember} />
    </div>
  );
}

export default App;
