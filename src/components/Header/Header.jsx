import { useSelector } from "react-redux";
import { FcHome } from "react-icons/fc";
import { selectFavorites } from "../../redux/adverts/selectors";
import { MainContainer } from "layouts/MainContainer";
import FavIcon from "components/icons/FavIcon";
import { HeaderBlock, Nav, NavigLink } from "./Header.styled";

const Header = () => {
  const favorites = useSelector(selectFavorites);

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
              <NavigLink id="favs" to="/favorites">
                {favorites.length > 0 && <div>{favorites.length}</div>}
                <FavIcon width={40} height={40} />
              </NavigLink>
            </li>
          </ul>
        </Nav>
      </MainContainer>
    </HeaderBlock>
  );
};

export default Header;
