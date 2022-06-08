import styled from "styled-components";

const StyledCursor = styled.div`
  position: absolute;
  height: 20px;
  padding: 0 10px;
  border-radius: 0 10px 10px 10px;
  transition: transform 0.25s;
  color: white;

  background: ${({ user }) => user.presence?.person.color};

  transform: ${({ user }) =>
    `translate(${user.presence?.cursor.x}px,${user.presence?.cursor.y}px)`};
`;

export default StyledCursor;
