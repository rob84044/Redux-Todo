import { TOGGLE_TODO, ADD_NEW_TODO } from '../actions';

const initialState = {
  title: 'The Best Todo App',
  todos: [
    { todo: 'Run create-react-app todo', completed: false },
    { todo: 'Run yarn install', completed: false },
    { todo: 'Run yarn add redux react-redux', completed: false },
    { todo: 'cd into the todo folder', completed: false },
    { todo: 'run yarn start', completed: false },
    { todo: 'Add a todo', completed: false },
    { todo: 'Mark a todo as completed', completed: false }
  ]
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NEW_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo, index) =>
          action.payload === index
            ? { ...todo, compeleted: !todo.completed }
            : todo
        )
      };
    default:
      return state;
  }
}

export default reducer;
