import React, { Component } from 'react';
import './index.less';

export default class Flow extends Component{
  state = {
    height: '',
    data: [
      {
        name: 'Online', 
        follows: [
          { 
            name: 'Online1', 
            follows: [
              { name: 'Online1-1', follows: [] },
            ] 
          },
          { 
            name: 'Online2', 
            follows: [
              { name: 'Online2-1', follows: [] },
              { name: 'Online2-2', follows: [] },
            ] 
          },
        ] 
      },
      { 
        name: 'All', 
        follows: [
          { 
            name: 'All1', 
            follows: [
              { name: 'All1-1', follows: [] },
              { name: 'All1-2', follows: [] },
              { name: 'All1-3', follows: [] },
            ] 
          },
          { name: 'All2', follows: [] },
          { name: 'All3', follows: [] },
        ] 
      },
    ]
  }

  calxy(){
    const clientHeight = document.body.clientHeight;
    const blockHeight = 60;
    const startX = 230;
    const diffX = 200;
    const data = JSON.parse(JSON.stringify(this.state.data));
    data.map((item, index)=>{
      let length = this.getFollowsLength(item);
      // item.x = startX;
      // item.y = (clientHeight - blockHeight) / 2;
    });
    this.setState({data});
  }

  getFollowsLength(arr){
    console.log('arr.follows.length', arr.follows.length);
    // let length = 0;
    // for(let i=0;i<arr.follows.length;i++){
    //   console.log('111', arr.follows[i]);
    //   length += arr.follows[i].length;
    // }
    // console.log('length', length);
    // return length;
  }

  render(){
    return(
      <div className='flow-demo'>
        <div className='flow-block' style={{left:'30px', top:'50%', transform:'translate(0, -50%)'}}>
          Filter
        </div>
        {this.state.data.map((item,index)=>{
          return (
            <div 
              className='flow-block' 
              style={{left:item.x, top:item.y}}
              key={index}
            >
              {item.name}
            </div>
          )
        })}
      </div>
    )
  }

  componentDidMount(){
    console.log(document.body.clientHeight);
    this.calxy();
  }
} 
