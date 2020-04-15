import React, { Component } from 'react';
import store from '../../store';

export default class TaskCol extends Component {
  constructor(props){
    super(props)
    this.state = store.getState()
  }
  
  handleDragEnter = (e) => {
    e.preventDefault();
    if (this.props.canDragIn) {
      this.setState({
        in: true
      })
    }
  }
  handleDragLeave = (e) => {
    e.preventDefault();
    if (this.props.canDragIn) {
      this.setState({
        in: false
      })
    }
  }
  handleDrop = (e) => {
    e.preventDefault();
    this.props.dragTo(this.props.status);
    this.setState({
      in: false
    })
  }
  render() {
    const { STATUS_CODE } = this.state;
    const { status, children } = this.props;
    return (
      <div 
        id={`col-${status}`} 
        className={'col'}
        onDragEnter={this.handleDragEnter}
        onDragLeave={this.handleDragLeave}
        onDragOver={this.handleDragEnter}
        onDrop={this.handleDrop}
      >
        <header className="col-header">
          {STATUS_CODE[status]}
        </header>
        <main className={'col-main' + (this.state.in ? ' active' : '')}>
          {children}
        </main>
      </div>
    );
  }
}
