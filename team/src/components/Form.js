import React, { useState } from 'react';

function Form() {

    const [teamMembers, setTeamMember] = useState({ name: '', email: '', role: ''})

    const handleChange = event => {
        setTeamMember({...teamMembers, [event.target.name]: event.target.value});
    }

    const handleSubmit = event => {
        event.preventDefault()
        console.log(teamMembers)
        setTeamMember({ name: '', email: '', role: ''})
    }

    return(
        <form onSubmit={event => handleSubmit(event)}>
            <label>
                Name:
                <input 
                    type='text'
                    name='name'
                    value={teamMembers.name}
                    onChange={event => handleChange(event)}
                />
            </label>
            <label>
                email:
                <input 
                    type='text'
                    name='email'
                    value={teamMembers.email}
                    onChange={event => handleChange(event)}
                />
            </label>
            <label>
                Role:
                <input 
                    type='text'
                    name='role'
                    value={teamMembers.role}
                    onChange={event => handleChange(event)}
                />
            </label>
            <button>Submit!</button>
        </form>
    )
}

export default Form