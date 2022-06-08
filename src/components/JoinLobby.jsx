import { useState } from "react";
import useStore from "../hooks/useStore";

export default function JoinLobby() {
  const [name, setName] = useState("");
  const { setPerson, joinLobby } = useStore();

  function randomColor() {
    return `hsl(${Math.ceil(Math.random() * 360)},40%,50%)`;
  }

  return (
    <label>
      Enter your name:
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (name.replace(/\s/g, "") !== "") {
            setPerson({ name, color: randomColor() });
            joinLobby();
          } else {
            alert("nope, du brauchst einen Namen");
            setName("");
          }
        }}
      >
        <input
          required
          type="text"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <button type="submit">enter</button>
      </form>
    </label>
  );
}
