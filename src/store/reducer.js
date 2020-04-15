const STATUS_TODO = 'STATUS_TODO';
const STATUS_DOING = 'STATUS_DOING';
const STATUS_DONE = 'STATUS_DONE';

const defaultState = {
  STATUS_TODO: STATUS_TODO,
  STATUS_DOING: STATUS_DOING,
  STATUS_DONE: STATUS_DONE,

  activeId: null,

  tasks: [
    {
      id: 0,
      status: STATUS_TODO,
      title: '每周七天阅读五次，每次阅读完要做100字的读书笔记',
      username: '小夏',
      point: 10
    }, 
    {
      id: 1,
      status: STATUS_TODO,
      title: '每周七天健身4次，每次健身时间需要大于20分钟',
      username: '橘子🍊',
      point: 5
    }, 
    {
      id: 2,
      status: STATUS_TODO,
      title: '单词*100',
      username: '┑(￣Д ￣)┍',
      point: 2
    }, 
    {
      id: 3,
      status: STATUS_TODO,
      title: '单词*150',
      username: '┑(￣Д ￣)┍',
      point: 2
    }, 
    {
      id: 4,
      status: STATUS_TODO,
      title: '单词*200',
      username: '┑(￣Д ￣)┍',
      point: 2
    }, 
    {
      id: 5,
      status: STATUS_TODO,
      title: '单词*250',
      username: '┑(￣Д ￣)┍',
      point: 2
    }
  ],

  STATUS_CODE: {
    STATUS_TODO: '待处理',
    STATUS_DOING: '进行中',
    STATUS_DONE: '已完成'
  },

  in: false,  //taskCol in
}

export default (state = defaultState, action) => {
  if(action.type === 'change_activeId'){
    console.log('change_activeId', action.value);
    const newState = JSON.parse(JSON.stringify(state));
    newState.activeId = action.value;
    return newState;
  }

  if(action.type === 'change_in'){
    console.log('change_in', action.value);
    const newState = JSON.parse(JSON.stringify(state));
    newState.in = action.value;
    return newState;
  }

  return state;
}