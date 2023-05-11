import { useState } from 'react';

// лічильник
export const HookUseState = () => {
  const [value, setValue] = useState(0);

  return (
    <div>
      {value}
      <button type="button" onClick={() => setValue(value + 1)}>
        Increment value by 1
      </button>
    </div>
  );
};

// ❌ Погано
// const HookUseState = () => {
//   const [state, setState] = useState({
//     username: '',
//     todos: [{ text: 'Learn hooks' }],
//     isModalOpen: false,
//   });
// };

// ✅ Добре
// const HookUseState = () => {
//   const [username, setUsername] = useState('');
//   const [todos, setTodos] = useState([{ text: 'Learn hooks' }]);
//   const [isModalOpen, setIsModalOpen] = useState(false);
// };

//! Обмеження хуків

// ❌ Буде помилка
// const TestUseHookState = () => {
//   if (isLoggedIn) {
//     const [username, setUsername] = useState('');
//   }

//   //
// };

// ✅ Так правильно використовувати хуки
// const TestUseHookState = () => {
//   const [username, setUsername] = useState('');
// };
