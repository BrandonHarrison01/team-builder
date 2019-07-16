import React, { useState } from 'react'

function TeamMembers(props) {

    const [editMember, setEditMember] = useState({ name: `${props.member.name}`, email: `${props.member.email}`, role: `${props.member.role}`, })

    return(
        <div key={props.member.name}>
            <p>Name: {props.member.name}</p>
            <p>Email: {props.member.email}</p>
            <p>Role: {props.member.role}</p>
            <h2>edit member:</h2>
            <form>
                <label>
                    Name:
                    <input 
                        type='text'
                        name='name'
                        value={editMember.name}
                        // onChange={event => handleChange(event)}
                        />
                </label>
                <label>
                    email:
                    <input 
                        type='text'
                        name='email'
                        value={editMember.email}
                        // onChange={event => handleChange(event)}
                        />
                </label>
                <label>
                    Role:
                    <input 
                        type='text'
                        name='role'
                        value={editMember.role}
                        // onChange={event => handleChange(event)}
                        />
                </label>
                <button>Submit!</button>
            </form>
        </div>
    )
}

export default TeamMembers