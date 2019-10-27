import React from 'react';

console.log('userOutput running')

const UserOutput = (props) => {
    return (
        <div className="UserOutput">
        <p> {props.username}</p>
        </div>
    )
};

export default UserOutput;