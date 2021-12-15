import React from "react";
import axios from "../../axios";
import { Todos } from './types';

const ListTodos = () => {
  const [todos, setTodos] = React.useState<Todos []>([]);

  React.useState(() => {
    console.log('running useState hook on ListTodos page');
    axios.get('/list', {
      params: {
        userId: 1
      }
    })
      .then(response => response.data)
      .then(response => {
        if (todos.length !== response.length) {
          console.log('setting the state of ListTodos to: ', response.userTodos);
          setTodos(response.userTodos)
        }
      })
      .catch(err => console.log('error while fetching todos: ', err))
  })
  return (
    <>
      <h1>List of todos will show up here</h1>
      {Array.isArray(todos) && todos.map(todo => <h2>{todo.title}</h2>)}
    </>
  );
};

export default ListTodos;