import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addNewTodo } from './actions';
import TodosContainer from '../src/components/TodosContainer';

import { AppDiv } from '../src/components/TodosContainer/styled';

function App(props) {
  const [todo, setTodo] = useState('');

  const handleSubmitTodo = e => {
    e.preventDefault();
    props.addNewTodo({
      value: todo,
      completed: false
    });
    setTodo('');
  };

  return (
    <AppDiv>
      <h2>Todo's, meet your match</h2>
      <form onSubmit={e => handleSubmitTodo(e)}>
        <input
          type="text"
          value={todo}
          onChange={e => setTodo(e.target.value)}
        />
        <input type="submit" value="Add Todo" />
      </form>
      <TodosContainer />
    </AppDiv>
  );
}

export default connect(
  null,
  { addNewTodo }
)(App);
