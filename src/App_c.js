import logo from './logo.svg';
import React from 'react';
import './App.css';
import Funcomone from './Funcomone'
import Funcomtwo from './Funcomtwo'
import Funcomthree from './Funcomthree'
import Funeventhandlingcom from './Funeventhandlingcom'

import Classcomtwo from './Classcomtwo'
import Classcomthree from './Classcomthree'

import Callcomfromothercom from './Callcomfromothercom'
import Classstatefour from './Classstatefour'

import Togglecom from './Togglecom'

import Classeventhandlingcom from './Classeventhandlingcom'


import Lifecyclemethod from './Lifecyclemethod'
import Componentdidmount from './Componentdidmount'

import Componentdidupdate from './Componentdidupdate'

import Componentwillmount from './Componentwillmount'
import Users from './Users'

import HomeContainer from './containers/HomeContainer'
import HeaderContainer from './containers/HeaderContainer';
import SearchRes from './SearchRes';
import Demo4 from './Demo4';
class  App extends React.Component {
  constructor()
  {
    super()
    this.state={
      toggle:true
    }
  }
  render()
  {
  return (
    <div className="App">
      


        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
           
        </a> */}
        {/* <Funcomone  p1="Functional Component (state less , no render , no contru , no this , bind not needed)"/>
          <Funcomtwo />
          <Funcomthree text={{name:'JSR - Jai Sai ram'}} data='india'/>

          <Classcomtwo />

          <Classcomthree text={{name:'JSR - Jai Sai ram- use (this keyword)'}} data='Sridhi' />

          <Classcomthree text={{name:'JSR - Jai Shri ram- use (this keyword)'}} data='Ayodhya' />
        <Callcomfromothercom text={{ name: '--' }} data='Ayodhya' />

        <Classstatefour />
         
       
        <Classeventhandlingcom /> 
        <Funeventhandlingcom />
        <Lifecyclemethod /> 

        <Componentdidmount />
        <Componentdidupdate />
        <Togglecom />*/}
        
        {/* <h1> React component will unmount</h1>

        {
          //if toogle is true then show willmount component otherwise hide
          this.state.toggle?
          <Componentwillmount />:null

        }

        <button onClick ={()=>{this.setState({toggle:!this.state.toggle})}}> Delete User</button> */}
{/* 
       <Users data ={{name:'sandeep' , age:40}}/> */}
       {/* <HeaderContainer />
      <HomeContainer /> */}

      {/* <SearchRes /> */}
      <Demo4/>
     
        {/* {
          React.createElement(
            'h6',
            {className:'my-css-class'},
            'hello JSX (without JSX)'

          )
        } */}
     
    </div>
  );
}
}

export default App;
