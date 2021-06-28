import React from 'react'
export default class Classstatefour extends React.Component {
    constructor() {
        console.warn("constructor Method called")
        super();
        this.state = {
            name: 'Peter',
            address: 'delhi',
            age: 40,
            email: 'un@org',
            count: 0
        }
    }
    UpdateState() {
        console.warn("UpdateState Method called")
        this.setState({
            name: 'name Update to : Sandeep',
            count: this.state.count + 1,
            age: 45
        })
    }
    render() {
        console.warn("Render Method called")
        return (
            <div> class with state -   sate is internal obj of clsss , accessable with in calss , can be used and updated as well
                <h6> {this.state.name} -{this.state.address} - {this.state.age} - {this.state.email} </h6>
                <h6> Count : {this.state.count}</h6>

                <button onClick={() => {this.UpdateState()}}> Update State </button>
            </div>
        )
    }

}