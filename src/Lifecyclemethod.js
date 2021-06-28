import React from 'react'

export default class Lifecyclemethod extends React.Component {


    constructor()
    {
        super();
        console.warn("Constructor Called")
    }
    componentDidMount()
    {
        console.warn("componentDidMount Called")

    }
    render()
    {
        console.warn("render Called")
        return(
            <div> <h1></h1></div>
        )
    }
}