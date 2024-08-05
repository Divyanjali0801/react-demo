import React from 'react';

// Child Component
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Another Child Component
function Farewell(props) {
  return <h2>Goodbye, {props.name}!</h2>;
}

// Parent Component
function App() {
  return (
    <div>
      <Greeting name="Alice" />
      <Farewell name="Bob" />
    </div>
  );
}

export default App;
