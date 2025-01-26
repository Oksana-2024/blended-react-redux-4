import Todo from '../Todo/Todo';
import Grid from '../Grid/Grid';
import GridItem from '../GridItem/GridItem';
import { useSelector } from 'react-redux';
import { selectTodos } from '../../redux/todosSlice';

const TodoList = () => {
  const todos = useSelector(selectTodos);
  return (
    <Grid>
      {todos.map((item, index) => (
        <GridItem key={item.id}>
          <Todo id={item.id} text={item.text} index={index + 1} />
        </GridItem>
      ))}
    </Grid>
  );
};

export default TodoList;
