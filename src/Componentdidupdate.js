import React from 'react'


export default class Componentdidupdate extends React.Component {

    constructor() {
        super()
        this.state = {
            who: null,
            active: null
        }
    }
    componentDidUpdate() {

        // In componentDidUpdate You need to update the state using 
        console.warn("componentDidUpdate called")
        if(this.state.who==null){
            this.setState({who:"sandeep Jha"})
        }
    }

    render() {

        return (
            <div>
                <h1> React Component Did update : {this.state.who}</h1>
                <button onClick={() => { this.setState({ active: "yes" }) }}> Activate </button>
            </div>
        )
    }
}