const defaultState = {
  allList: [
    {id:1, title:'aa', content:'aaaa'},
    {id:2, title:'bb', content:'bbbb'},
    {id:3, title:'cc', content:'cccc'},
    {id:4, title:'dd', content:'dddd'},
    {id:5, title:'ee', content:'eeee'}
  ],
  itemList: [
    {id:2, title:'bb', content:'bbbb'},
    {id:3, title:'cc', content:'cccc'},
    {id:4, title:'dd', content:'dddd'},
  ],
  flowList: [
    {id:1, title:'aa', content:'aaaa'},
    {id:5, title:'ee', content:'eeee'},
  ],
  activeId: null,
  activeItem: null,
}

export default (state = defaultState, action) => {
  if(action.type === 'change_active'){
    const newState = JSON.parse(JSON.stringify(state));
    newState.activeId = action.value.id;
    newState.activeItem = action.value;
    return newState;
  }

  if(action.type === 'show_position'){
    const newState = JSON.parse(JSON.stringify(state));
    if(!newState.activeItem){
      console.log('newState.activeItem:', newState);
    }
    newState.activeItem.dashed = true;
    newState.flowList.push(newState.activeItem);
    return newState;
  }

  if(action.type === 'remove_position'){
    const newState = JSON.parse(JSON.stringify(state));
    for(let i=0;i<newState.flowList.length;i++){
      if(newState.flowList[i].id === newState.activeId){
        newState.flowList.splice(i, 1);
        break;
      }
    }
    return newState;
  }

  if(action.type === 'add_flow'){
    const newState = JSON.parse(JSON.stringify(state));
    for(let i=0;i<newState.itemList.length;i++){
      if(newState.itemList[i].id === newState.activeId){
        newState.itemList.splice(i, 1);
        break;
      }
    }
    for(let i=0;i<newState.flowList.length;i++){
      if(newState.flowList[i].id === newState.activeId){
        newState.flowList[i].dashed = false;
        break;
      }
    }
    newState.activeId = null;
    newState.activeItem = null;
    return newState;
  }

  return state;
}