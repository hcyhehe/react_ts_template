import React, { Component } from 'react';
import DragList from '../../components/dragList/index';
import store from '../../store';
import './index.less';

export default class protoDrag extends Component {
  constructor(){
    super();
    this.state = store.getState();
  }

  handlePanelEnter(e){
    console.log('handlePanelEnter', e.target.className);
    if(this.state.activeId && this.state.activeItem && e.target.className == 'panel'
      //(e.target.className == 'panel' || e.target.className.match('comClass'))
    ){
      const action = {
        type: 'show_position'
      };
      store.dispatch(action);
    }
  };

  handlePanelLeave (e){
    console.log('handlePanelLeave', e.target.className);
    if(e.target.className == 'panel'){
      const action = {
        type: 'remove_position'
      };
      store.dispatch(action);
    }
  };

  handleDragEnter(e){
    console.log('handleDragEnter', e.target.className);
    if(e.target.className.match('canDrag')){
      const action = {
        type: 'add_flow'
      };
      store.dispatch(action);
    }
  };

  render(){
    return(
      <div className="drag">
        <DragList />
        <div
          className="panel" 
          onDragEnter={e => this.handlePanelEnter(e)}
          onDragLeave={e => this.handlePanelLeave(e)}
        >
          {this.state.flowList.map((item, index) =>{
            return(
              <div 
                className={item.dashed ? "panelItem canDrag comClass" : "panelItem comClass"} 
                key={'panelItem-'+index}
                onDragEnter={e => this.handleDragEnter(e)}
              >
                <div className="title comClass">this is title {item.title}</div>
                <div className="content comClass">this is content {item.content}</div>
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