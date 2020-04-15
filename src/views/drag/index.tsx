import React, { Component } from 'react';
import DragList from '../../components/dragList/index'
import Form from '../../components/form/index'
import './index.less'

export default class Drag extends Component {
  render(){
    return(
      <div className="drag">
        <DragList />
        <div className="panel">
          
        </div>
        <Form />
      </div>
    );
  }
}