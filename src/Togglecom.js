import React from 'react'

export default class Togglecom extends React.Component {

    constructor() {
        super();
        this.state = {
            show: true
        }
    }
    ShowHide() {
        this.setState({
            show: false
        }
        )
    }
    render() {
        return (

            <div>
                {
                    // if true show and hide and else nothing 
                    this.state.show?
                    <h6> Show and Hide</h6>
                    :null 
                }
                 <button onClick={()=>{this.ShowHide()}}> Show Hide 1</button>
                 <button onClick={()=>{this.setState({show:false})}}> Show Hide 2 </button>
                <button onClick={()=>{this.setState({show:!this.state.show})}}> Toggle Me</button>
            </div>
        )
    }
}