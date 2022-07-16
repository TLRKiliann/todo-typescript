import React from "react";
import { Todo } from "../models/model";
import SingleTodo from "./SingleTodo";
import "./styles.css";


interface props {
  todos: Array<Todo>;
  setTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
};

const TodoList = ({todos, setTodos}: props) => {
  return (
    <div className="todolist--div">
      {todos?.map((todo) => (
        <SingleTodo
          key={todo.id}
          todo={todo}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
};

export default TodoList;