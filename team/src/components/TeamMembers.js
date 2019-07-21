import React, { useState } from 'react'

import EditForm from './EditForm'

function TeamMembers(props) {

    const [member, setMember] = useState(props.member)
    const [openEdit, setOpenEdit] = useState(false)

    const editMember = edit => {
        setMember(edit)
    }

    const openEditMember = () => {
        setOpenEdit(!openEdit)
    }

    return(
        <div key={member.name}>
            <p>Name: {member.name}</p>
            <p>Email: {member.email}</p>
            <p>Role: {member.role}</p>
            <button onClick={ () => openEditMember() }>Edit Member</button>
            <EditForm member={member} editMember={editMember} openEdit={openEdit} />
        </div>
    )
}

export default TeamMembers