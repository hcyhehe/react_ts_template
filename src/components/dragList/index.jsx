import React, { Component } from 'react';
import store from '../../store';
import './index.less';


export default class DragList extends Component {
  constructor(props){
    super(props);
    this.state = store.getState();
  }

  handleStart (e, id){
    //e.preventDefault();
    console.log('handleStart', id);
    const action = {
      type: 'change_activeId',
      value: id
    };
    store.dispatch(action);
  }

  handleEnd (e, id){
    //e.preventDefault();
    console.log('handleEnd', id);
  }

  render(){
    return(
      <div className="dragList">
        {this.state.itemList.map((item, index) =>{
          return(
            <div 
              className="dragItem" 
              key={'drag-'+index}
              draggable="true"
              onDragStart={e => this.handleStart(e, item.id)}
              onDragEnd={e => this.handleEnd(e, item.id)}
            >
              <div className="title">this is title {item.title}</div>
              <div className="content">this is content {item.content}</div>
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