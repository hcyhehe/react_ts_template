const defaultState = {
  itemList: [
    {id:2, title:'bb', content:'bbbb', virtual:false, follow:[3,4,5]},
    {id:3, title:'cc', content:'cccc', virtual:false, follow:[4,5]},
    {id:4, title:'dd', content:'dddd', virtual:false, follow:[5]},
  ],
  flowList: [
    {id:1, title:'aa', content:'aaaa', virtual:false, follow:[2,3,4,5]},
    {id:5, title:'ee', content:'eeee', virtual:false, follow:[]},
  ],
  activeId: null,
}

export default (state = defaultState, action) => {
  if(action.type === 'change_activeId'){
    const newState = JSON.parse(JSON.stringify(state));
    newState.activeId = action.value;
    return newState;
  }

  if(action.type === 'show_position'){
    const newState = JSON.parse(JSON.stringify(state));
    console.log('newState.activeId:', newState.activeId);
    //look for which one follow this
    for(let i=0;i<newState.flowList.length;i++){
      //if(newState.flowList[i].follow.length>0 && )
    }
    return newState;
  }

  // if(action.type === 'put_into_flow'){
  //   const newState = JSON.parse(JSON.stringify(state));
  //   let item;
  //   for(let i=0;i<newState.itemList.length;i++){
  //     if(newState.itemList[i].id == newState.activeId){
  //       item = newState.itemList[i];
  //       newState.itemList.splice(i, 1);
  //       break;
  //     }
  //   }
  //   if(item){
  //     newState.flowList.push(item);
  //   }
  //   console.log('newState:', newState);
  //   return newState;
  // }

  return state;
}