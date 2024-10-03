import React from 'react'
import { Alert } from 'react-bootstrap'
const firstName = 'oussama'; // Change this to your name or leave empty

const UserName = () => {
    return (
        <div> <Alert key='warning' variant='warning'>
            <h3>{firstName ? `Hello, ${firstName}!` : 'Hello, there!'}</h3>
        </Alert></div>
    )
}

export default UserName