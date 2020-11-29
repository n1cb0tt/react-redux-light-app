const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'REMOVE10':
      return state - 10;
    case 'REMOVE1':
      return state - 1;
    case 'RESET':
      return 0;
    case 'ADD1':
      return state + 1;
    case 'ADD10':
      return state + 10;
    default:
      return state;
  }
};
export default counterReducer;
