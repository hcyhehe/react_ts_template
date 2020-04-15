import React, { Component } from 'react';
import './index.less'

interface DragListProps {
  
}

interface DragListState {
  list: any[]
}

export default class DragList extends Component<DragListProps, DragListState> {
  constructor(props: DragListProps){
    super(props);
    this.state = {
      list: [
        {id:'1', title:'aa', content:'aaaa'},
        {id:'2', title:'bb', content:'bbbb'},
        {id:'3', title:'cc', content:'cccc'},
      ]
    }
  }
  render(){
    return(
      <div className="dragList">
        {this.state.list.map((item, index) =>{
          return(
            <div className="dragItem" key={item}>
              <div className="title">this is title {item.title}</div>
              <div className="content">this is content {item.content}</div>
            </div>
          )
        })}
      </div>
    );
  }
}