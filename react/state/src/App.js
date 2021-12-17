import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: this.props.counter,
    }

  }

  addNewState = () => {
    this.setState({date: new Date().toString()});
  }

  updateCounterState = () => {
    this.setState({ counter: this.state.counter + 1 });
    this.setState({ counter: this.state.counter + 1 });
    this.setState({ counter: this.state.counter + 1 });
  }


  render() {
    return (
        <span>
        counter state: {this.state.counter}
        date state: { this.state.date }

        <button type="button" onClick={this.addNewState}> Add date to state </button>
        <button type="button" onClick={this.updateCounterState}> Update counter </button>
      </span>
    );
  }
}