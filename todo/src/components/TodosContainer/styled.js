import styled from 'styled-components';

const TodoListWrapper = styled.div`
  width: 100%;
  max-width: 80rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 45%;
  margin-top: 20px;
`;

const TodoWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  align-content: center;
`;

const TodoValue = styled.label`
  width: 100%;
  overflow-wrap: break-word;
  padding-left: 10px;
  vertical-align: middle;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
`;

const TodoCheckbox = styled.input`
  &:checked + ${TodoValue} {
    text-decoration: line-through;
  }
  font-size: 2rem;

  transform: scale(1.3);
`;
const AppDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export { TodoListWrapper, TodoWrapper, TodoValue, TodoCheckbox, AppDiv };
