import React from 'react';
import Farewell from './Farewell';


function Greeting(props) {
    
    return (
    <div>
    <h1>Hello, {props.name}!</h1>;

    <Farewell name="Bob" />
  
    </div>
    )
  }


  export default Greeting;