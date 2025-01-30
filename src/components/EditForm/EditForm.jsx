import { RiSaveLine } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';

import style from './EditForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentTodo, setCurrentTodo } from '../../redux/todosSlice';
import { editTodo } from '../../redux/todosOps';
import { useEffect, useState } from 'react';

const EditForm = () => {
  const dispatch = useDispatch();
  const currentTodo = useSelector(selectCurrentTodo);// початковий стан(або новий стан)
  const [text, setText] = useState(currentTodo?.text || ''); //стан для редагування
  //слідкуємо за зміною currentTodo
  useEffect(() => {
    setText(currentTodo.text);
  }, [currentTodo]);

  const handleSubmit = async e => {
    try {
      e.preventDefault();
      const text = e.target.search.value;
      const upDatedTodo = { text, id: currentTodo.id };
      await dispatch(editTodo(upDatedTodo)).unwrap();
      e.target.reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        required
       // defaultValue={currentTodo.text} *замінили на value і onChange
       //прикожній зміні значення input.value оновлюємо text
        value={text}
        onChange={e => setText(e.target.value)}
        autoFocus
      />

      <button className={style.submitButton} type="submit">
        <RiSaveLine color="green" size="16px" />
      </button>
      <button
        className={style.editButton}
        type="button"
        onClick={() => dispatch(setCurrentTodo(null))}
      >
        <MdOutlineCancel color="red" size="16px" />
      </button>
    </form>
  );
};
export default EditForm;
