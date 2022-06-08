import useStore from "../hooks/useStore";
import { useState } from "react";

export default function TodoList() {
  const [inputValue, setInputValue] = useState("");
  const {
    person,
    todos,
    addTodo,
    deleteTodo,
    setReallyDelete,
    editTodo,
    controlTodo,
    checkTodo,
    liveblocks: { isStorageLoading },
  } = useStore();

  return (
    <>
      <label>
        Enter a Todo:
        <form
          onSubmit={(event) => {
            event.preventDefault();
            addTodo(inputValue, person.name, person.color);
            setInputValue("");
          }}
        >
          <input
            type="text"
            value={inputValue}
            onChange={(event) => {
              setInputValue(event.target.value);
            }}
          />
          <button type="submit">add</button>
        </form>
      </label>
      <ul>
        {!isStorageLoading &&
          todos.map((todo) => {
            return (
              <li key={todo.id}>
                <input
                  type="checkbox"
                  checked={todo.checked}
                  onChange={() => {
                    checkTodo(todo.id);
                  }}
                />
                {todo.edit ? (
                  <input
                    type="text"
                    value={todo.name}
                    onChange={(event) => {
                      controlTodo(
                        todo.id,
                        event.target.value,
                        person.name,
                        person.color
                      );
                    }}
                  />
                ) : (
                  <>
                    <span
                      style={{ textDecoration: todo.checked && "line-through" }}
                    >
                      {todo.name}
                    </span>
                    <span style={{ color: "white", background: todo.color }}>
                      ( {todo.editedBy} )
                    </span>
                  </>
                )}
                <button
                  type="button"
                  onClick={() => {
                    if (todo.reallyDelete) {
                      deleteTodo(todo.id);
                      setReallyDelete(todo.id, false);
                    } else {
                      setReallyDelete(todo.id, true);
                    }
                  }}
                >
                  {todo.reallyDelete ? "really?" : "delete"}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    editTodo(todo.id);
                  }}
                >
                  {todo.edit ? "save" : "edit"}
                </button>
              </li>
            );
          })}
      </ul>
    </>
  );
}
