import useStore from "../hooks/useStore";
import LiveblocksSetup from "../utils/LiveBlocksSetup";
import LobbyList from "./LobbyList";
import CursorTracker from "../utils/CursorTracker";
import Cursors from "./Cursors";
import TodoList from "./TodoList";

export default function Lobby() {
  return (
    <>
      <LiveblocksSetup />
      <LobbyList />
      <CursorTracker />
      <Cursors />
      <TodoList />
    </>
  );
}
