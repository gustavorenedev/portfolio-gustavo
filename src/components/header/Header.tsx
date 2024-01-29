import {
  ElementHeader,
  HeaderContainer,
  HeaderCta,
  HeaderProfile,
  HeaderSocials,
  HeaderImage,
} from "./Header.style";

import HeaderPicture from "../../assets/pictureHeader.svg";
import { Button } from "../button/Button";
import data from "./data";

const Header = () => {
  return (
    <ElementHeader>
      <HeaderContainer>
        <HeaderProfile>
          <HeaderImage src={HeaderPicture} alt="personal photo" />
        </HeaderProfile>
        <h3>Gustavo René</h3>
        <p>
          Olá! Sou Gustavo René, desenvolvedor Full-Stack com especialidade em
          React, Styled Components, C# e SQL . Ajudo pequenos negócios e
          designers a colocarem em prática boas ideias.
        </p>
        <HeaderCta>
          <Button link="#contact">Vamos conversar ?</Button>
          <Button link="#portfolio">Meu trabalho</Button>
        </HeaderCta>
        <HeaderSocials>
          {data.map((item: any) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="nooper noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </HeaderSocials>
      </HeaderContainer>
    </ElementHeader>
  );
};

export default Header;
