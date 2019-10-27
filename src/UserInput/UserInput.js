import React from 'react';

console.log('userInput running')

const UserInput = (props) => {
    return (
        <div className="UserInput">
        <p>Change username</p>
            <input 
            type="text" 
            onChange={props.changed}
            value={props.currentName}/>
        </div>
    )
};

export default UserInput;