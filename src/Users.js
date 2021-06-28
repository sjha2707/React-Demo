import React from 'react'


const users = (props) => {
    //console.warn(props.data.name)
    const data = props.data;
    return (
        <div>
            <h1> User componenet</h1>

           name:{data.name}
           age:{data.age}
        </div>
    )
}

export default users;