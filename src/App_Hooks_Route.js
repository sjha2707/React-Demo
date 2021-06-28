import React , {useState} from 'react';
import Componentwillmount from './Componentwillmount'
import Formhooks from './Formhooks'
import Forms from './Forms';
import Listingmap from './Listingmap';
import Style from './Style';

import{
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';
import Home from './Home';
import About from './About';
  
function App()
{
    // here count is use as state and setCount is used as setState;
    const [count,setCount]=useState(100)

    return(
        <div>
            {/* 

            Comment Code Block Ctrl+K+C/Ctrl+K+U
            <h1> Hooks in functional component , to set state , life cycle</h1>
            <h1> Hooks  cannot be used in Class component {count}</h1>
            <button onClick={()=>{setCount(count+1)}}> Increment (setCount is used as setState)</button> */}
            {/* <Formhooks /> */}

            {/* <Forms /> */}

            {/* <Listingmap /> */}
            <Router>
                <Link to="">Home</Link> 
                <Link to="/about">About</Link>
                <Link to="/style">Style 123</Link>

                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/style" component={Style}/>
            {/* <Home />
            <About />
            <Style data="apply"/> */}

            </Router>


        </div>
    )

}

export default App;