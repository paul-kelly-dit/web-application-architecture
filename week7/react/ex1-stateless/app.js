import React from 'react';
//an example of function type component
const ExampleComponent = (props) => {
    return ( <h1>Welcome to Educative!</h1>);
}
        
export default class App extends React.Component {
  render() {
    //rendering ExampleComponent component in App Component
    return (
      <div>
        <ExampleComponent/> 
        </div>
    );
  }
}
