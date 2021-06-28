import React, { Component } from 'react';

class Listingmap extends Component {

    constructor()
    {
    super();
    this.state={
        list:[
            {name:' Sairam 1',phone:'10000000',email:'sai123@gmail.com'},
            {name:' Sairam 2',phone:'11111111',email:'sai234@gmail.com'},
            {name:' Sairam 3',phone:'22222222',email:'sai345@gmail.com'},
            {name:' Sairam 4',phone:'33333333',email:'sai3456@gmail.com'}
        ]
    }

    }
    render() {
        return (
            <div>
                <h1>
                    Listing with MAP
                </h1>
                {
                    this.state.list.map((item)=>
                    <div> 
                       <span>Name: {item.name}   </span>
                       <span> Phone: {item.phone} </span>
                       <span> Email: {item.email} </span>
                    </div>
                    )
                }
            </div>
        );
    }
}

export default Listingmap;