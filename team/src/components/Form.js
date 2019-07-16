import React, { useState } from 'react';

function Form(props) {

    const [newMember, setNewMember] = useState({ name: '', email: '', role: '' })

    const handleChange = event => {
        setNewMember({...newMember, [event.target.name]: event.target.value});
    }
  
    const handleSubmit = event => {
        event.preventDefault()
        console.log(newMember)
        props.inputMember(newMember)
        setNewMember({ name: '', email: '', role: ''})
    }

    return(
        <div>
            <h2>new member:</h2>
            <form onSubmit={event => handleSubmit(event)}>
                <label>
                    Name:
                    <input 
                        type='text'
                        name='name'
                        value={newMember.name}
                        onChange={event => handleChange(event)}
                    />
                </label>
                <label>
                    email:
                    <input 
                        type='text'
                        name='email'
                        value={newMember.email}
                        onChange={event => handleChange(event)}
                    />
                </label>
                <label>
                    Role:
                    <input 
                        type='text'
                        name='role'
                        value={newMember.role}
                        onChange={event => handleChange(event)}
                    />
                </label>
                <button>Submit!</button>
            </form>
        </div>
    )
}

export default Form