import { useDispatch, useSelector } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../../redux/adverts/slice";
import { PiWind } from "react-icons/pi";
import { selectFavorites } from "../../redux/adverts/selectors";
import {
  StarIcon,
  LocationIcon,
  AdultsIcon,
  BedIcon,
  KitchenIcon,
  PetrolIcon,
  TransmissionIcon,
  FavIcon,
} from "components/icons";
import {
  VanPic,
  MainInfoWrap,
  TitlePriceWrap,
  Title,
  PriceWrap,
  Price,
  RatingLocationWrap,
  RatingWrap,
  LocationWrap,
  Description,
  DetailsList,
  ShowBtn,
  AddToFavBtn,
} from "./AdvertCard.styled";

const AdvertCard = ({ card }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  const isCardFavorite = favorites.find((fav) => fav._id === card._id);

  return (
    <>
      <VanPic>
        <img src={card.gallery[0]} alt={card.name} />
      </VanPic>

      <MainInfoWrap>
        <TitlePriceWrap>
          <Title>{card.name}</Title>

          <PriceWrap>
            <Price>€{card.price.toFixed(2)}</Price>
            <AddToFavBtn
              type="button"
              aria-label="Add to favorites"
              onClick={() =>
                isCardFavorite
                  ? dispatch(removeFromFavorites(card._id))
                  : dispatch(addToFavorites(card))
              }
              $isFavorite={isCardFavorite}
            >
              <FavIcon width={20} height={20} />
            </AddToFavBtn>
          </PriceWrap>
        </TitlePriceWrap>

        <RatingLocationWrap>
          <RatingWrap>
            <StarIcon width={20} height={20} />
            <p>{`${card.rating}(${card.reviews.length} Reviews)`}</p>
          </RatingWrap>

          <LocationWrap>
            <LocationIcon width={20} height={20} />
            <p>{card.location.split(",").reverse().join(", ")}</p>
          </LocationWrap>
        </RatingLocationWrap>

        <Description>{card.description}</Description>

        <DetailsList>
          <li>
            <div>
              <AdultsIcon width={20} height={20} />
              {card.adults} adults
            </div>
          </li>
          <li>
            <div className="capitalize">
              <TransmissionIcon width={20} height={20} />
              {card.transmission}
            </div>
          </li>
          <li>
            <div className="capitalize">
              <PetrolIcon width={20} height={20} />
              {card.engine}
            </div>
          </li>
          {card.details.kitchen >= 1 && (
            <li>
              <div>
                <KitchenIcon width={20} height={20} />
                Kitchen
              </div>
            </li>
          )}

          <li>
            <div>
              <BedIcon width={20} height={20} />
              {card.details.beds} beds
            </div>
          </li>
          {card.details.airConditioner >= 1 && (
            <li>
              <div>
                <PiWind size={20} style={{ fill: "var(--text-color)" }} />
                AC
              </div>
            </li>
          )}
        </DetailsList>

        <ShowBtn type="button" aria-label="Show more details">
          Show more
        </ShowBtn>
      </MainInfoWrap>
    </>
  );
};

export default AdvertCard;
