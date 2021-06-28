import React from 'react'
export default function Funeventhandlingcom() {
    // function callFun() {
    //     alert("callFun Called")
    // }
    const callFun=()=>{
        alert('callFun Called other  way')
    }
    return (
        <div>
            <h6> test 123 </h6>
            <button onClick={callFun}> click Me 1 </button>

        </div>
    )
}