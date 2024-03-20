import { useSelector } from "react-redux";
import { selectFavorites } from "../redux/adverts/selectors";
import { MainContainer } from "layouts/MainContainer";
import AdvertCard from "components/AdvertCard";
import { AdvertsList, CardItem } from "components/AdvertCard/AdvertCard.styled";

const Favorites = () => {
  const favorites = useSelector(selectFavorites);
  return (
    <>
      <MainContainer>
        {favorites.length > 0 ? (
          <AdvertsList>
            {favorites.map((fav) => (
              <CardItem key={fav._id}>
                <AdvertCard card={fav} />
              </CardItem>
            ))}
          </AdvertsList>
        ) : (
          <div>It seems you have not added anything to favorites ...</div>
        )}
      </MainContainer>
    </>
  );
};

export default Favorites;
