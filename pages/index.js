import useStore from "../src/hooks/useStore";
import JoinLobby from "../src/components/JoinLobby";
import Lobby from "../src/components/Lobby";

export default function App() {
  const joined = useStore((state) => state.joined);
  return <>{joined ? <Lobby /> : <JoinLobby />}</>;
}
