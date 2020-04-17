import React, { Component } from 'react';
import store from '../../store';
import './index.less';


export default class DragList extends Component {
  constructor(props){
    super(props);
    this.state = store.getState();
  }

  handleStart (e, item){
    console.log('handleStart', item);
    const action = {
      type: 'change_active',
      value: item
    };
    store.dispatch(action);
  };

  render(){
    return(
      <div className="dragList">
        {this.state.itemList.map((item, index) =>{
          return(
            <div 
              className="card draggable"
              draggable="true"
              key={'drag-'+index}
              onDragStart={e=>this.handleStart(e, item)}
            >
              <div className="header">
                <div className="left">
                  <div className="title">Drag this card {item.title}</div>
                  <div className="subtitle"></div>
                </div>
                <div className="right"></div>
              </div>
              <div className="content">
                <p>Short description on this item {item.content}</p>
              </div>
            </div>
          )
        })}
      </div>
    );
  }

  componentDidMount(){
    store.subscribe(() => {
      this.setState(store.getState());
    });
  }
}