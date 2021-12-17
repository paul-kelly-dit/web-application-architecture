import React, { Component } from 'react';

class App extends Component {


  constructor(props){
    super(props)

    // Set initial state

    this.state = {timesPressed : 0}

    // Binding this keyword
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit= (stateEvent) => {
    // stateEvent.preventDefault();
    console.log('You clicked submit.');
    this.setState({
      timesPressed: this.state.timesPressed+1,
    });
  }

  render() {
    return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <button type="submit">Submit</button>
          </form>
          <p>Number of times the submit button was pressed: {this.state.timesPressed}</p>
        </div>
    )
  }
}

export default App;