import React from 'react'


export default class Componentdidmount extends  React.Component
{

    // order constructor ,render ,componentDidMount,render
    constructor()
    {
        super()
        this.state={
            data:null
        }
        console.warn("constructor Called !!!")
    }

    componentDidMount()
    {
        
        this.setState({data:"date update"})
        console.warn("componentDidMount")


    }

    render()
    {
        console.warn("render")
        return(
            <div>
                <h1></h1>
            </div>
        )
    }

}