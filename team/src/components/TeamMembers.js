import React, { useState } from 'react'

import EditForm from './EditForm'

function TeamMembers(props) {

    const [member, setMember] = useState(props.member)

    const editMember = edit => {
        setMember(edit)
    }

    return(
        <div key={member.name}>
            <p>Name: {member.name}</p>
            <p>Email: {member.email}</p>
            <p>Role: {member.role}</p>
            <EditForm member={member} editMember={editMember}/>
        </div>
    )
}

export default TeamMembers