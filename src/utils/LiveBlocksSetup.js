import { useEffect } from "react";
import useStore from "../hooks/useStore";

export default function LiveblocksSetup() {
  const {
    liveblocks: { enterRoom, leaveRoom },
  } = useStore();

  useEffect(() => {
    enterRoom("roll-room", { todos: [] });

    return () => {
      leaveRoom("roll-room");
    };
  }, [enterRoom, leaveRoom]);

  return null;
}
