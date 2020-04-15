import React, { Component } from 'react';
import TaskCol from '../../components/taskCol/index';
import TaskItem from '../../components/taskItem/index';
import store from '../../store';
import './index.less';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = store.getState(); 
  }
  
  /**
   * 传入被拖拽任务项的 id
   */
  onDragStart = (id) => {
    this.setState({
      activeId: id
    });
  }
  
  dragTo = (status) => {
    const { tasks,  activeId} = this.state;
    const task = tasks[activeId];
    if (task.status !== status) {
      task.status = status;
      this.setState({
        tasks: tasks
      });
    }
    this.cancelSelect();
  }
  
  cancelSelect = () => {
    this.setState({
      activeId: null
    });
  }
  
  render() {
    const { tasks, activeId, STATUS_CODE } = this.state;
    const { onDragStart, onDragEnd, cancelSelect } = this;
    return (
      <div className="task-wrapper">
        {
          Object.keys(STATUS_CODE).map(status => 
            <TaskCol 
              status={status} 
              key={status} 
              dragTo={this.dragTo}
              canDragIn={activeId !== null && tasks[activeId].status !== status}>
              { tasks.filter(t => t.status === status).map(t => 
                <TaskItem
                  key={t.id}
                  active={t.id === activeId}
                  id={t.id}
                  title={t.title} 
                  point={t.point} 
                  username={t.username}
                  onDragStart={onDragStart}
                  onDragEnd={cancelSelect}
                />)
              }
            </TaskCol>
          )
        }
      </div>
    )
  }
}

