import React, { useState } from 'react';

export const App = () => {
  const [inputText, setInputText] = useState('');
  const [incompleteTodos, setInompleteTodos] = useState(['']);

  const getInputValue = (e: any) => {
    setInputText(e.target.value);
  };

  const addTask = () => {
    if (inputText === '') return;
    setInompleteTodos([...incompleteTodos, inputText]);
    setInputText('');
  };

  const deleteTask = (index: number) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setInompleteTodos(newTodos);
  };

  return (
    <>
      <div className="container">
        <h1 className="title">TODO APP</h1>
        <div className="input-wrapper">
          <input
            className="input-form"
            value={inputText}
            onChange={getInputValue}
            placeholder="Add your tasks"
          />
          <button className="input-btn" onClick={addTask}>
            ADD
          </button>
        </div>
        <div className="list-wrapper">
          <ul className="list">
            {incompleteTodos.map((todo, index): any => {
              return (
                <li key={index} className="item">
                  {todo}
                  <button
                    className="delete-btn"
                    onClick={() => deleteTask(index)}
                  >
                    Delete
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
