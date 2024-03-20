import { useEffect } from "react";
import { createPortal } from "react-dom";
import { CloseIcon, LocationIcon, StarIcon } from "components/icons";
import {
  Backdrop,
  CLoseBtn,
  Content,
  HeadInfo,
  PicsList,
  Window,
} from "./Modal.styled";
import { MainContainer } from "layouts/MainContainer";
import {
  Description,
  LocationWrap,
  Price,
  RatingLocationWrap,
  RatingWrap,
  Title,
} from "components/AdvertCard/AdvertCard.styled";

const Modal = ({ card, closeModal }) => {
  useEffect(() => {
    const handleESCClose = (e) => {
      if (e.code === "Escape") closeModal();
    };

    window.addEventListener("keydown", handleESCClose);

    return () => window.removeEventListener("keydown", handleESCClose);
  }, [closeModal]);

  const handleBackdropClose = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      closeModal();
      document.body.style.overflow = "visible";
    }
  };

  return createPortal(
    <Backdrop onClick={handleBackdropClose}>
      <MainContainer>
        <Window>
          <CLoseBtn type="button" aria-label="Close modal" onClick={closeModal}>
            <CloseIcon width={40} height={40} />
          </CLoseBtn>

          <Content>
            <HeadInfo>
              <Title>{card.name}</Title>

              <RatingLocationWrap id="rating-wrap">
                <RatingWrap>
                  <StarIcon width={20} height={20} />
                  <p>{`${card.rating}(${card.reviews.length} Reviews)`}</p>
                </RatingWrap>

                <LocationWrap>
                  <LocationIcon width={20} height={20} />
                  <p>{card.location.split(",").reverse().join(", ")}</p>
                </LocationWrap>
              </RatingLocationWrap>

              <Price>€{card.price.toFixed(2)}</Price>
            </HeadInfo>

            <PicsList>
              {card.gallery.length > 0 &&
                card.gallery.map((link, i) => (
                  <li key={`${card._id}/${i}`}>
                    <img src={link} alt={card.name} />
                  </li>
                ))}
            </PicsList>

            <Description id="description">{card.description}</Description>
          </Content>
        </Window>
      </MainContainer>
    </Backdrop>,
    document.getElementById("modal-root")
  );
};

export default Modal;
