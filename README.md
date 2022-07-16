# Todo with TypeScript

## Install

└─ $ ▶ npx create-react-app my-app --template typescript


---

## font-family google

**In App.css file**

@import url("https://fonts.googleapis.com/css2?family=Neucha&display=swap");

font-family: "Neucha", cursive;


---

## React Icons

└─ $ ▶ npm install react-icons

```
(SingleTodo.tsx)
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";

<AiFillEdit />
```

---


## Trucs


inset pour assombrir le fond !

`box-shadow: inset 0 0 5px black;`


```
useState<string>()
useState<string | number>("")
useState<Array<Name>>([])
```


---

## Build

# Set a tag to call component

App.tsx
-------

```
import InputField from "./components/InputField";

const App: React.FC = () => {

	const [todo, setTodo] = useState<string>("");

	return (
		<>
			<InputField todo={todo} setTodo={setTodo} />
		</>
	)
}

export default App;
```

InputField.tsx
--------------

```
import React from "react";

interface Props {
	name: string;
	age: number;
}

const InputField:React.FC<Props> = (name, number) => {
	return (
		<Todo 
			key={todo.id}
			value={todo}
			onChange={(e)=>setTodo(e.target.value)}

			/>
	);
} 
```

---

# Properties of todo :

todo have only one property :

```
id: number;
text: string;
variable: boolean;
```

In many place, `todo` will be used, so we need to create a `model.ts`.

```
model.ts

export interface Todo {
    id: number;
    todo: string;
    isDone: boolean;
}
```

Is imported by every file (export & import o.f.), except `InputField.tsx`.


---

# handleAdd

```
InputField.tsx

interface Props {
	todo: string;
	setTodo: React.Dispatch<React.SetStateAction<string>>;
	handleAdd: (e: React.FormEvent) => void;
}
```

**<React.SetStateAction<string> dispatch action setState. The update of `useState(todo)`.**


---

# New todo & new state of todo:

```
const handleAdd = (e) = {
	if (todo) {
		setTodo([...todos, {id_ Date.now(), todo: todo, 	isDone: false}
		]);
		setTodo("");
	}
}
```


---

# useRef()

> const inputRef = useRef<HTMLInputElement>(null);

```
import React, {useRef} from "react";
import "./styles.css";


interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void; //return nothing
}

//Equal to: const InputField: React.FC<Props> = ({todos, setTodos, handleAdd}) => {
const InputField = ({ todo, setTodo, handleAdd }: Props) => {

    **const inputRef = useRef<HTMLInputElement>(null);**
    
    return (
        <form className="input" onSubmit={(e) => {
            handleAdd(e);
            inputRef.current?.blur();
        }}>
            <input
                ref={inputRef}
                type="text"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                placeholder="Enter a task here !"
                className="input__box"
            />
            <button type="submit" className="btn--go">Go</button>
        </form>
    )
}

export default InputField;
```

1)

> type="submit" (button)

2)

```
    return (
        <form className="input" onSubmit={(e) => {
            handleAdd(e);
            inputRef.current?.blur();
        }}>
```

---

# useContext()

https://www.w3schools.com/react/react_usecontext.asp


---

# useReducer()

useReducer with TypeScript
--------------------------

```
export interface Todo {
  id: number;
  todo: string;
  isDone: boolean;
}

type Actions = 
  | {type: "add"; payload: string}
  | {type: "remove"; payload: number}
  | {type: "done"; payload: number}

const TodoReducer = (state:Todo[], actions: Actions) => {
  switch (action.type) {
    case "add":
      return [
        ...state,
        { id: Date.now(), todo: action.payload, isDone: false}
      ];
    case "remove":
      return state.filter((todo) => todo.id !== action.payload)
    case "done":
      return state.map((todo) => todo.id !== action.payload 
      ? {...todo, isDone: !todo.isDone} 
    );
    default:
      return state;
  }
}

import { useReducer } from "react";

  const ReducerExemple = () => {
    const [state, dispatch] = useReducer(TodoReducer, [])


  return (
    <div />
  );

}
```

---
