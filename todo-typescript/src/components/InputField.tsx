import React from "react";


interface props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd : (e: React.FormEvent) => void;
}

const InputField = ({todo, setTodo, handleAdd}: props) => {
  return (
    <form onSubmit={(e) => handleAdd(e)} className="inputfield">

      <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
    
      <button type="submit">Go</button>
    
    </form>
  );
};

export default InputField;