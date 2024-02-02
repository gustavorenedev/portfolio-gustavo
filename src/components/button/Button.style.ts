import styled from "styled-components";
import { colors } from "../../styles/Colors";

export const ElementButton = styled.a`
  display: inline-block;
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 1rem;
  background: ${colors.light};
  color: ${colors.black};
  padding: 0.6rem 2.5rem;
  border: 2px solid transparent;
  border-radius: 0.8rem;
  cursor: pointer;

  &:hover {
    background-color: transparent;
    border-color: ${colors.light};
    transform: translateY(-0.5rem);
  }
`;
