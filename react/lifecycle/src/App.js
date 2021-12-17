import React from 'react';

export default class Clock extends React.Component {

  state = {
    date: new Date(),
  };

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState(() => ({
        date: new Date(),
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearTimeout(this.intervalId);
  }

  render() {
    return <div>{this.state.date.toLocaleTimeString()}</div>;
  }
}