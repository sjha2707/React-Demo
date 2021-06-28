import React, { Component } from 'react';

class Api extends Component {
    constructor() {
        super();
        this.state = {
            users: null
        }
    }
    componentDidMount() {
        fetch('https://reqres.in/api/users')
            .then((reps) => {
                reps.json()
                    .then((result) => {
                        this.setState({ users: result.data })
                        console.warn(result.data)
                    })
            })
    }
    render() {
        return (
            <div>
                 <h1> Fetch API DATA </h1>
                {
                    this.state.users?
                    this.state.users.map((item,i)=>
                    <div> 
                        <p>
                            {i}
                            ----
                            {item.first_name} {item.last_name}
                            -----
                            {item.email} 
                        </p> 
                        

                    </div>
                    )
                    :
                    null

                }
            </div>
        );
    }
}

export default Api;