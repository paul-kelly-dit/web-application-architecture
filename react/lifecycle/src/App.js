import React from 'react';

const log = (method, component) => {
  console.log(`[${component}]`, method);
};

export default class ParentComponent extends React.Component {

  state = {};

  constructor(props) {
    super(props);
    log('constructor', 'parent');
  }

  static getDerivedStateFromProps() {
    log('getDerivedStateFromProps', 'parent');
    return null;
  }

  componentDidMount() {
    log('componentDidMount', 'parent');
    this.intervalId = setTimeout(() => {
      log('state update', 'parent');
      this.setState(() => ({
        time: new Date().toLocaleTimeString(),
      }));
    }, 2000);
  }

  shouldComponentUpdate() {
    log('shouldComponentUpdate', 'parent');
    return true;
  }

  getSnapshotBeforeUpdate() {
    log('getSnapshotBeforeUpdate', 'parent');
    return null;
  }

  componentDidUpdate() {
    log('componentDidUpdate', 'parent');
  }

  componentWillUnmount() {
    log('componentWillUnmount', 'parent');
    clearInterval(this.intervalId);
  }

  render() {
    log('render', 'parent');
    return <ChildComponent time={this.state.time} />;
  }
}

class ChildComponent extends React.Component {
  state = {};

  constructor(props) {
    super(props);
    log('constructor', 'child');
  }

  static getDerivedStateFromProps() {
    log('getDerivedStateFromProps', 'child');
    return null;
  }

  componentDidMount() {
    log('componentDidMount', 'child');
  }

  shouldComponentUpdate() {
    log('shouldComponentUpdate', 'child');
    return true;
  }

  getSnapshotBeforeUpdate() {
    log('getSnapshotBeforeUpdate', 'child');
    return null;
  }

  componentDidUpdate() {
    log('componentDidUpdate', 'child');
  }

  componentWillUnmount() {
    log('componentWillUnmount', 'child');
  }

  render() {
    log('render', 'child');
    return <div>{this.props.time}</div>;
  }
}
