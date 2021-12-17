import React from 'react';

class InfoBox extends React.Component {
  render() {
    const { headline } = this.props;
    return <h1>{ headline }</h1>;
  }
}

export default class App extends React.Component {
  render() {
    return (
        <InfoBox headline='Hello world'/>
    );
  }
}