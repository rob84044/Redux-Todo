export const ADD_NEW_TODO = 'ADD_NEW_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export const addNewTodo = todo => {
  return {
    type: ADD_NEW_TODO,
    payload: todo
  };
};

export function toggleTodo(idx) {
  console.log('bk: toggleTodo: ', idx);
  return {
    type: TOGGLE_TODO,
    payload: idx
  };
}
