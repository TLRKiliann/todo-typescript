import React, {useState, useEffect, useRef} from "react";
import { Todo } from "../models/model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import "./styles.css";


interface props {
  todo: Todo;
  todos: Array<Todo>;
  setTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
};

const SingleInput = ({ todo, todos, setTodos }: props) => {
  
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const secondRef = useRef<HTMLInputElement>(null);

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(todos.map(todo => todo.id === id ? { ...todo, todo: editTodo } : todo))
    setEdit(false);
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => (todo.id !== id)));
  };

  const handleDone = (id: number) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, isDone: !todo.isDone } : todo))
    setEdit(false);
  };

  useEffect(() => {
    secondRef.current?.focus();
  }, [edit]);

  return (
    <form onSubmit={(e) => handleEdit(e, todo.id)} className="singleinput--div">
      {edit ? (
        <input 
          ref={secondRef}
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          style={{fontSize: "1.1rem"}}
        />
        ) : todo.isDone ? (
        <s>{todo.todo}</s>
        ) : (
        <span>{todo.todo}</span>
        )
      }
        <div className="btn--action">

          <span onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit)
            }
          }} className="edit--span">Edit<AiFillEdit /></span>
      
          <span onClick={() => handleDone(todo.id)} className="done--span">Done<MdDone /></span>

          <span onClick={() => handleDelete(todo.id)} className="del--span">Delete<AiFillDelete /></span>

        </div>

    </form>
  );
};

export default SingleInput;
