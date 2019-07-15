import React from 'react'

function TeamMembers(props) {
    return(
        <div>
            {props.teamMembers.map(member => 
                <div key={member.name}>
                    <p>Name: {member.name}</p>
                    <p>Email: {member.email}</p>
                    <p>Role: {member.role}</p>
                </div>
            )}
        </div>
    )
}

export default TeamMembers