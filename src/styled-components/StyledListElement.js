import styled from "styled-components";

const StyledListElement = styled.li`
  color: white;
  padding: 2px 10px;
  background: ${({ color }) => color};
`;

export default StyledListElement;
