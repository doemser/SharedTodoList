import useStore from "../hooks/useStore";
import StyledListElement from "../styled-components/StyledListElement";

export default function LobbyList() {
  const person = useStore((state) => state.person);
  const others = useStore((state) => state.liveblocks.others);

  return (
    <ul
      style={{
        position: "fixed",
        right: "20px",
        listStyle: "none",
        marginLeft: "-25px",
      }}
    >
      <StyledListElement color={person.color}>
        {person.name} ( you )
      </StyledListElement>
      {others.map((user) => {
        return (
          user.presence?.cursor && (
            <StyledListElement
              color={user.presence?.person.color}
              key={user.connectionId}
            >
              {user.presence?.person.name}
            </StyledListElement>
          )
        );
      })}
    </ul>
  );
}
