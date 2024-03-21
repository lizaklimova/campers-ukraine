import { useState, useRef, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../../redux/adverts/slice";
import { PiWind } from "react-icons/pi";
import { selectFavorites } from "../../redux/adverts/selectors";
import Modal from "components/Modal";
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
  const [isModalShown, setIsModalShown] = useState(false);
  const [activeTab, setActiveTab] = useState("features");

  const reviewsRef = useRef();
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  const isCardFavorite = useMemo(
    () => favorites.find((fav) => fav._id === card._id),
    [favorites, card._id]
  );

  const scrollToReviews = () => {
    console.log(reviewsRef);
    if (reviewsRef.current) {
      reviewsRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

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
              $isFavorite={!!isCardFavorite}
            >
              <FavIcon width={20} height={20} />
            </AddToFavBtn>
          </PriceWrap>
        </TitlePriceWrap>

        <RatingLocationWrap>
          <RatingWrap>
            <StarIcon width={20} height={20} />
            <button
              type="button"
              aria-label="Open reviews"
              onClick={() => {
                setIsModalShown(true);
                setActiveTab("reviews");
                scrollToReviews();
              }}
            >{`${card.rating}(${card.reviews.length} Reviews)`}</button>
          </RatingWrap>

          <LocationWrap>
            <LocationIcon width={20} height={20} />
            <p>{card.location.split(",").reverse().join(", ")}</p>
          </LocationWrap>
        </RatingLocationWrap>

        <Description>{card.description}</Description>

        <DetailsList>
          <li>
            <AdultsIcon width={20} height={20} />
            {card.adults} adults
          </li>

          <li className="capitalize">
            <TransmissionIcon width={20} height={20} />
            {card.transmission}
          </li>

          <li className="capitalize">
            <PetrolIcon width={20} height={20} />
            {card.engine}
          </li>

          {card.details.kitchen >= 1 && (
            <li>
              <KitchenIcon width={20} height={20} />
              Kitchen
            </li>
          )}

          <li>
            <BedIcon width={20} height={20} />
            {card.details.beds} beds
          </li>

          {card.details.airConditioner >= 1 && (
            <li>
              <PiWind size={20} style={{ fill: "var(--text-color)" }} />
              AC
            </li>
          )}
        </DetailsList>

        <ShowBtn
          type="button"
          aria-label="Show more details"
          onClick={() => {
            setIsModalShown(true);
            document.body.style.overflow = "hidden";
          }}
        >
          Show more
        </ShowBtn>
      </MainInfoWrap>

      {isModalShown && (
        <Modal
          card={card}
          isModalShown={isModalShown}
          closeModal={() => setIsModalShown(false)}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          ref={reviewsRef}
        />
      )}
    </>
  );
};

export default AdvertCard;
