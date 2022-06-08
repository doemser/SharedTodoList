import { useState } from "react";
import useStore from "../hooks/useStore";

export default function JoinLobby() {
  const [name, setName] = useState("");
  const { setPerson, joinLobby } = useStore();

  const randomNumberBetween = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);

  function randomColor() {
    return `hsl(${randomNumberBetween(180, 360)},${randomNumberBetween(
      40,
      75
    )}%,${randomNumberBetween(40, 75)}%)`;
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
