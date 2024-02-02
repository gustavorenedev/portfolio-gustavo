import { ElementNav, NavContainer, NavLogo, NavMenu } from "./Navbar.style";
import data from "./data";

const Navbar = () => {
  return (
    <ElementNav>
      <NavContainer>
        <NavLogo>
          &lt; <strong>G</strong>r/ &gt;
        </NavLogo>
        <NavMenu>
          {data.map((item) => (
            <li key={item.id}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </NavMenu>
        <div></div>
      </NavContainer>
    </ElementNav>
  );
};

export default Navbar;
