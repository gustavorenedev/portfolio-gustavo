import styled from "styled-components";
import { colors } from "../../styles/Colors";

export const ElementHeader = styled.header`
  margin-top: 5rem;
  height: calc(100vh - 5rem);
  display: grid;
  place-items: center;
  background: ${colors.white};
  transition: all 500ms ease;
`;

export const HeaderContainer = styled.div`
  width: 80%;
  margin-inline: auto;
  max-width: 1920px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  p {
    font-size: 1.1rem;
    width: 35rem;
    text-align: center;
    margin: 0.6rem 0 2rem;
  }

  h3 {
    font-weight: 700;
  }
`;

export const HeaderProfile = styled.div`
  width: 18rem;
  height: 22rem;
  overflow: hidden;
  margin-bottom: 1.5rem;
`;

export const HeaderCta = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  & > *:first-child {
    background: ${colors.primary};
    color: white;

    &:hover {
      background: transparent;
      border-color: ${colors.primary};
      color: ${colors.primary};
    }
  }
`;

export const HeaderSocials = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  a {
    font-size: 2rem;
    width: 3rem;
    aspect-ratio: 1/1;
    background: ${colors.light};
    color: ${colors.black};
    display: grid;
    place-items: center;
    border-radius: 0.5rem;
  }

  a:hover {
    background: ${colors.primary};
    color: ${colors.white};
    transform: translateX(-0.5rem);
  }
`;

export const HeaderImage = styled.img`
  max-width: 100%;
`;
