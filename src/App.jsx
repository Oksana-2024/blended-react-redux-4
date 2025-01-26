import { useDispatch, useSelector } from 'react-redux';
import Container from './components/Container/Container';
import Header from './components/Header/Header';
import Section from './components/Section/Section';
import Text from './components/Text/Text';
import { selectCurrentTodo, selectTodos } from './redux/todosSlice';
import Form from './components/Form/Form';
import TodoList from './components/TodoList/TodoList';
import { useEffect } from 'react';
import { fetchAllTodos } from './redux/todosOps';
import EditForm from './components/EditForm/EditForm';

export const App = () => {
  const todos = useSelector(selectTodos);
  console.log('todos', todos);
  const dispatch = useDispatch();
  const currentTodo = useSelector(selectCurrentTodo);

  useEffect(() => {
    dispatch(fetchAllTodos());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Section>
        <Container>
          <Text textAlign="center">Create your first todo😉</Text>
          {currentTodo ? <EditForm /> : <Form />}
          <TodoList />
        </Container>
      </Section>
    </>
  );
};
