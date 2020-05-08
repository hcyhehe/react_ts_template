const defaultState = {
  allList: [
    {id:1, title:'aa', content:'aaaa', dashed:false},
    {id:2, title:'bb', content:'bbbb', dashed:false},
    {id:3, title:'cc', content:'cccc', dashed:false},
    {id:4, title:'dd', content:'dddd', dashed:false},
    {id:5, title:'ee', content:'eeee', dashed:false}
  ],
  itemList: [
    {id:2, title:'bb', content:'bbbb', dashed:false},
    {id:3, title:'cc', content:'cccc', dashed:false},
    {id:4, title:'dd', content:'dddd', dashed:false},
  ],
  flowList: [
    {id:1, title:'aa', content:'aaaa', dashed:false},
    {id:5, title:'ee', content:'eeee', dashed:false},
  ],
  activeItem: null,
}

export default (state = defaultState, action) => {
  if(action.type === 'change_active'){
    const newState = JSON.parse(JSON.stringify(state));
    //clean all the dashed true item
    for(let i=0;i<newState.flowList.length;i++){
      if(newState.flowList[i].dashed===true){
        newState.flowList.splice(i, 1);
      }
    }
    
    newState.activeItem = action.value;
    newState.activeItem.dashed = true;
    newState.flowList.push(newState.activeItem);
    return newState;
  }

  if(action.type === 'remove_active'){
    const newState = JSON.parse(JSON.stringify(state));
    for(let i=0;i<newState.flowList.length;i++){
      if(newState.flowList[i].id === newState.activeItem.id){
        newState.flowList.splice(i, 1);
        break;
      }
    }
    newState.activeItem = null;
    return newState;
  }

  if(action.type === 'add_flow'){
    const newState = JSON.parse(JSON.stringify(state));
    for(let i=0;i<newState.itemList.length;i++){
      if(newState.itemList[i].id === newState.activeItem.id){
        newState.itemList.splice(i, 1);
        break;
      }
    }
    for(let i=0;i<newState.flowList.length;i++){
      if(newState.flowList[i].id === newState.activeItem.id){
        newState.flowList[i].dashed = false;
        break;
      }
    }
    newState.activeItem = null;
    return newState;
  }

  return state;
}