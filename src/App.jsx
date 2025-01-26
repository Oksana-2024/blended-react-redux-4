import { useSelector } from 'react-redux';
import Container from './components/Container/Container';
import Header from './components/Header/Header';
import Section from './components/Section/Section';
import Text from './components/Text/Text';
import { selectTodos } from './redux/todosSlice';
import Form from './components/Form/Form';
import TodoList from './components/TodoList/TodoList';

export const App = () => {
  const todos = useSelector(selectTodos);
  console.log('todos', todos);

  return (
    <>
      <Header />
      <Section>
        <Container>
          <Text textAlign="center">Create your first todo😉</Text>
          <Form />
          <TodoList />
        </Container>
      </Section>
    </>
  );
};
