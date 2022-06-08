import StyledCursor from "../styled-components/StyledCursor";
import useStore from "../hooks/useStore";

export default function Cursors() {
  const others = useStore((state) => state.liveblocks.others);

  return (
    <>
      {others.map((user) => {
        return (
          <StyledCursor key={user.connectionId} user={user}>
            {user.presence?.person.name}
          </StyledCursor>
        );
      })}
    </>
  );
}
