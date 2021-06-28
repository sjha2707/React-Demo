import React, { Component } from 'react';
import Combootstrap from './Combootstrap';
import Ref from './Ref';

import { Button } from 'react-bootstrap'
import Api from './Api';
import Combootstrapmodal from './Combootstrapmodal';
import User from './User';
import Data from './Data';

class App extends Component {

    constructor() {
        super();
        
    }
    // Call api inside  componentDidMount , becz all html will be ready by that time.
    
    render() {
        return (
            <div>
               {/* <Api/> */}
               {/* <Button onClick={() => alert("Item Clicked!!!")}> Click Me</Button>
                <Ref /> */}
               {/* <Combootstrap /> */}
               {/* <Combootstrapmodal /> */}
               {/* <User /> */}

               <Data />
            </div>
        );
    }
}

export default App;