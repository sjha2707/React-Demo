import React, { Component } from 'react';

class Ref extends Component {
    constructor()
    {
        super();
        this.userRef=React.createRef();
        
    }
    editVal()
    {
        ///this.userRef.current.value="100000"
        console.warn(this.userRef)
        this.userRef.current.focus();
        this.userRef.current.value="1000000"
    }
    render() {
        return (
            <div>
             <h1> Ref in React</h1>
             <input ref={this.userRef} type="text" name="user" />
             <button onClick={()=>this.editVal()}>Click Me</button>   
            </div>
        );
    }
}

export default Ref;