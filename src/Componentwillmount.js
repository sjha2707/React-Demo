import React, { Component } from 'react'

export default class Componentwillmount extends Component {

    componentWillUnmount() {
        alert("User has been Deleted!!!")
    }
    render() {
        return (
            <div>
                <ul>
                    <li>
                        Name:Sandeep
                        email:sai@gmail.comp
                    </li>
                    <li>
                        email:sai@gmail.comp
                    </li>
                    <li>
                        Phone:1234444
                    </li>
                </ul>
            </div>
        )
    }

}
