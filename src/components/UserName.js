import React from 'react'
import { Alert } from 'react-bootstrap'
import avatar from './7309681.jpg'

const UserName = () => {
    const firstName = 'Oussama'; // Change this to your name or leave empty
    return (
        <div> <Alert key='warning' variant='warning'>
            <h3>{firstName ? `Hello, ${firstName}!` : 'Hello, there!'}</h3>
        </Alert>
            {firstName && (
                <img
                    src={avatar}
                    alt="Success icon"
                    style={{ width: '50px', marginLeft: '10px' }}
                />
            )}</div>
    )
}

export default UserName