import React, { Component } from 'react';
import DragList from '../../components/dragList/index';
import store from '../../store';
import './index.less';

export default class protoDrag extends Component {
  constructor(){
    super();
    this.state = store.getState();
  }

  handleBodyOver(e){
    e.preventDefault();
    console.log('handleBodyOver');
  };

  handleBodyDrop(e){
    e.preventDefault();
    e.persist();
    console.log('handleBodyDrop', e.target.className);
    if(e.target.className.match('canDrag')){
      const action = {
        type: 'add_flow'
      };
      store.dispatch(action);
    } else {
      const action = {
        type: 'remove_active'
      };
      store.dispatch(action);
    }
  };

  render(){
    return(
      <div 
        className="drag"
        onDragOver={e => this.handleBodyOver(e)}
        onDrop={e => this.handleBodyDrop(e)}
      >
        <DragList />
        <div
          className="panel" 
        >
          {this.state.flowList.map((item, index) =>{
            return(
              <div 
                className={item.dashed ? "panelItem canDrag" : "panelItem"} 
                key={'panelItem-'+index}
              >
                <div className={item.dashed ? "title canDragTitle": "title"}>
                  this is title {item.title}
                </div>
                <div className={item.dashed ? "content canDragContent": "content"}>
                  this is content {item.content}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    );
  }

  componentDidMount(){
    store.subscribe(() => {
      this.setState(store.getState());
    });
  }
}