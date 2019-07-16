import React, { useState } from 'react';

function EditForm(props) {

    const [editMember, setEditMember] = useState({ name: `${props.member.name}`, email: `${props.member.email}`, role: `${props.member.role}`, })

    const handleChange = event => {
        setEditMember({...editMember, [event.target.name]: event.target.value})
    }

    const handleSubmit = event => {
        event.preventDefault()
        console.log(editMember)
        props.editMember(editMember)
    }

    return(
        <div className={props.openEdit === false ? 'none' : ''}>
            <h2>edit member:</h2>
            <form onSubmit={event => handleSubmit(event)}>
                <label>
                    Name:
                    <input 
                        type='text'
                        name='name'
                        value={editMember.name}
                        onChange={event => handleChange(event)}
                    />
                </label>
                <label>
                    email:
                    <input 
                        type='text'
                        name='email'
                        value={editMember.email}
                        onChange={event => handleChange(event)}
                    />
                </label>
                <label>
                    Role:
                    <input 
                        type='text'
                        name='role'
                        value={editMember.role}
                        onChange={event => handleChange(event)}
                    />
                </label>
                <button>Submit!</button>
            </form>
        </div>
    )
}

export default EditForm