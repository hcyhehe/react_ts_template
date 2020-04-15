const defaultState = {
  status1: '',
}

export default (state = defaultState, action) => {
  if(action.type === ''){
    const newState = JSON.parse(JSON.stringify(state));
    //...
    return newState;
  }
  return state;
}