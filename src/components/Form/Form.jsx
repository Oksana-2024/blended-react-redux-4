import { FiSearch } from 'react-icons/fi';

import style from './Form.module.css';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/todosOps';

const Form = () => {
  const dispatch = useDispatch();

  const handleSubmit = async e => {
    try {
      e.preventDefault();
      const text = e.target.search.value;
      const newTodo = { text };
      await dispatch(addTodo(newTodo)).unwrap();
      e.target.reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
      />
    </form>
  );
};

export default Form;
