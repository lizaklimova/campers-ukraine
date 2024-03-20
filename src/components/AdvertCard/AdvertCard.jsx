import { PiWind } from "react-icons/pi";
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
} from "./AdvertCard.styled";

const AdvertCard = ({ card }) => {
  return (
    <>
      <VanPic src={card.gallery[0]} alt={card.name} />

      <MainInfoWrap>
        <TitlePriceWrap>
          <Title>Mavericks</Title>

          <PriceWrap>
            <Price>$8000</Price>
            <button type="button">
              <FavIcon width={20} height={20} />
            </button>
          </PriceWrap>
          {/* <p>{advert.name}</p>
          <p>{advert.price}</p> */}
        </TitlePriceWrap>

        <RatingLocationWrap>
          <RatingWrap>
            {/* <p>{`${advert.rating}(${advert.reviews.length} Reviews)`}</p> */}
            <StarIcon width={20} height={20} />
            <p>4.4(2 Reviews)</p>
          </RatingWrap>

          <LocationWrap>
            {/* <p>{advert.location}</p> */}
            <LocationIcon width={20} height={20} />
            <p>Kyiv, Ukraine</p>
          </LocationWrap>
        </RatingLocationWrap>

        {/* <p>{advert.description}</p> */}
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
          voluptatibus ut animi enim, iste culpa suscipit reprehenderit dolor
          debitis nisi ullam aliquid corrupti explicabo aspernatur vitae ipsam
          recusandae rerum in.
        </Description>

        <DetailsList>
          <li>
            <div>
              2 adults
              <AdultsIcon width={20} height={20} />
            </div>
          </li>
          <li>
            <div>
              automatic
              <TransmissionIcon width={20} height={20} />
            </div>
          </li>
          <li>
            <div>
              petrol
              <PetrolIcon width={20} height={20} />
            </div>
          </li>
          <li>
            <div>
              <KitchenIcon width={20} height={20} />
              kitchen
            </div>
          </li>
          <li>
            <div>
              <BedIcon width={20} height={20} />1 beds
            </div>
          </li>
          <li>
            <div>
              <PiWind size={20} />
              AC
            </div>
          </li>
        </DetailsList>

        <ShowBtn type="button">Show more</ShowBtn>
      </MainInfoWrap>
    </>
  );
};

export default AdvertCard;
