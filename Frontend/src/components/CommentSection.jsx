// TodoList.jsx
import React, { useState } from 'react';
import ReviewSecond from './ReviewSecond';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const handleAddTodo = () => {
    if (input.trim() === '') return; // Do not add empty to-dos
    setTodos([...todos, input]);
    setInput('');
  };

  // const handleRemoveTodo = (index) => {
  //   setTodos(todos.filter((_, i) => i !== index));
  // };

  return (
    <div className=" px-48 py-10 bg-primary ">
      <div className="flex gap-5">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className=" placeholder:bg-primary bg-primary outline-none text-grey placeholder:text-sm " 
          placeholder="Add a new comment"
        />
        <button
          onClick={handleAddTodo}
          className="text-white bg-pink rounded-sm px-10 py-1"
        >
          Add
        </button>
      </div>
      <ul className="flex flex-col gap-2">
        {todos.map((todo, index) => (
          <li key={index} className="flex items-center justify-between py-1">
            <ReviewSecond text={todo} />
            {/* <span className="text-grey  text-xl">{todo}</span> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
