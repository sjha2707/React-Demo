import React from 'react'


export default function Funcomone(props)
{
    const show=()=>{
        alert("Show Function Called!!! ")
    }

    return <div> 
        <h6 onClick={show}> {props.p1}</h6>
        </div>
}

