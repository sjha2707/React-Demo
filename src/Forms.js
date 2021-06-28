import React from 'react'

export default class  Forms extends React.Component{

    constructor()
    {
        super()
        this.state={
        user:"",
        password:"",
        userError:"",
        passwordError:""

        }
    }
    valid()
    {

        if(!this.state.user.includes("@") && this.state.password.length<5)
        {
            this.setState(
                {userError:"Invalid Name" ,passwordError:"Password length should be more than 5" }
            )
        }

        else if(!this.state.user.includes("@"))
        {
            this.setState(
                {userError:"Invalid Name"}
            )
        }

        else if(this.state.password.length<5)
        {
            this.setState(
                {passwordError:"Password length should be more than 5"}
            )
        }
        else{
            return true;
        }
    }
    submit()
    {
        // console.warn(this.state);
        // console.warn(this.state.password);
        this.setState(
            {userError:"" ,passwordError:"" }
        )
        if(this.valid())
        {
        alert("From has been submited.");
        }


    }   

    render()
    {
        return(
            <div>
                <h1> Form Handling</h1>
                <input 
                type="text" 
                name="user"  
                onChange={(e)=>{this.setState({user:e.target.value})}}/>
                <p style={{color:"red", fontSize:"14px"}}> {this.state.userError}</p>
                <input 
                type="password" 
                name="password"  
                onChange={(e)=>{this.setState({password:e.target.value})}}/>
                <p style={{color:"red",fontSize:"14x"}}> {this.state.passwordError}</p>
                <button onClick={()=>this.submit()}> Submit </button>
            </div>
        )
    }

} 