import React, { Component } from 'react';
import DragList from '../../components/dragList/index'
import Form from '../../components/form/index'
import store from '../../store';
import './index.less'

export default class Drag extends Component {
  constructor(){
    super();
    this.state = store.getState();
  }

  handleDragEnter (e){
    e.persist();
    console.log('handleDragEnter', e.target.className);
    if(e.target.className == 'panel'){
      const action = {
        type: 'show_position'
      };
      store.dispatch(action);
    }
  }

  render(){
    return(
      <div className="drag">
        <DragList />
        <div 
          className="panel" 
          onDragEnter={e => this.handleDragEnter(e)}
        >
          {this.state.flowList.map((item, index) =>{
            return(
              <div 
                className="panelItem" 
                key={'panelItem-'+index}
              >
                <div className="title">this is title {item.title}</div>
                <div className="content">this is content {item.content}</div>
              </div>
            )
          })}
        </div>
        <Form />
      </div>
    );
  }

  componentDidMount(){
    store.subscribe(() => {
      this.setState(store.getState());
    });
  }
}