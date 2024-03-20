import { MainContainer } from "layouts/MainContainer";
import { HeaderBlock, Nav, NavigLink } from "./Header.styled";
import { FcHome } from "react-icons/fc";
import FavIcon from "components/icons/FavIcon";

const Header = () => {
  return (
    <HeaderBlock>
      <MainContainer>
        <Nav>
          <ul>
            <li>
              <NavigLink to="/">
                <FcHome size={40} />
              </NavigLink>
            </li>
            <li>
              <NavigLink to="/catalog">Catalog</NavigLink>
            </li>
            <li>
              <NavigLink to="/favorites">
                <FavIcon width={30} height={30} />
              </NavigLink>
            </li>
          </ul>
        </Nav>
      </MainContainer>
    </HeaderBlock>
  );
};

export default Header;
