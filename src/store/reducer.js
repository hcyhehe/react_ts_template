const defaultState = {
  itemList: [
    {id:'1', title:'aa', content:'aaaa'},
    {id:'2', title:'bb', content:'bbbb'},
    {id:'3', title:'cc', content:'cccc'},
  ],
  flowList: [

  ],
  activeId: null,
}

export default (state = defaultState, action) => {
  if(action.type === 'change_activeId'){
    const newState = JSON.parse(JSON.stringify(state));
    newState.activeId = action.value;
    return newState;
  }

  if(action.type === 'put_into_flow'){
    const newState = JSON.parse(JSON.stringify(state));
    let item;
    for(let i=0;i<newState.itemList.length;i++){
      if(newState.itemList[i].id == newState.activeId){
        item = newState.itemList[i];
        newState.itemList.splice(i, 1);
        break;
      }
    }
    if(item){
      newState.flowList.push(item);
    }
    console.log('newState:', newState);
    return newState;
  }

  return state;
}