import React from 'react'

export default class Classeventhandlingcom extends React.Component
{
    callFun()
    {
        alert("callFun Called")
    }

    render()
    {
        return(
            <div>
                <h6> test 123 </h6>
                <button onClick={()=>{this.callFun()}}> click Me 1(Using Arrow Function) </button>
                <button onClick={this.callFun.bind(this)}> click Me 2 (using bind</button>
            </div>
        )
    }
}
