import create from "zustand";
import { createClient } from "@liveblocks/client";
import { middleware } from "@liveblocks/zustand";
import { nanoid } from "nanoid";

const client = createClient({
  publicApiKey: process.env.NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY,
});

const useStore = create(
  middleware(
    (set) => ({
      joined: false,
      joinLobby: () => set({ joined: true }),
      person: null,
      setPerson: (person) => set({ person }),
      cursor: { x: 0, y: 0 },
      setCursor: (cursor) => set({ cursor }),
      todos: [],
      addTodo: (name, editedBy, color) =>
        set((state) => ({
          todos: state.todos.concat({
            name,
            editedBy,
            color,
            checked: false,
            id: nanoid(),
          }),
        })),
      deleteTodo: (id) =>
        set((state) => ({
          todos: state.todos.filter((todo_) => todo_.id !== id),
        })),
      setReallyDelete: (id, reallyDelete) =>
        set((state) => ({
          todos: state.todos.map((todo_) =>
            todo_.id === id ? { ...todo_, reallyDelete } : todo_
          ),
        })),
      editTodo: (id) =>
        set((state) => ({
          todos: state.todos.map((todo_) =>
            todo_.id === id ? { ...todo_, edit: !todo_.edit } : todo_
          ),
        })),
      checkTodo: (id) =>
        set((state) => ({
          todos: state.todos.map((todo_) =>
            todo_.id === id ? { ...todo_, checked: !todo_.checked } : todo_
          ),
        })),
      controlTodo: (id, name, editedBy, color) =>
        set((state) => ({
          todos: state.todos.map((todo_) =>
            todo_.id === id ? { ...todo_, name, editedBy, color } : todo_
          ),
        })),
    }),
    {
      client,
      storageMapping: { todos: true },
      presenceMapping: { person: true, cursor: true },
    }
  )
);

export default useStore;
