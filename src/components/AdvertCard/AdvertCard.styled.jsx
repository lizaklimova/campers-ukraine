import styled, { css } from "styled-components";

const TitlesStyles = css`
  color: var(--text-color);
  font-size: 24px;
  font-weight: 600;
`;

const FlexAlign = css`
  display: flex;
  align-items: center;
`;

export const AdvertsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 50px;
`;

export const CardItem = styled.li`
  ${FlexAlign}
  flex-direction: column;
  justify-content: space-between;
  gap: 15px;
  width: 100%;
  border-radius: 20px;
  border: 1px solid var(--border-color);
  padding: 15px;
  background-color: var(--white);
  /* background: #040404; */
  box-shadow: rgba(239, 241, 243, 0.3) 0px 1px 2px 0px,
    rgba(225, 229, 232, 0.15) 0px 1px 3px 1px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }

  @media screen and (min-width: 1440px) {
    width: 80%;
    padding: 24px;
    margin: 0 auto;
  }
`;

export const VanPic = styled.div`
  min-width: 100%;
  min-height: 100%;
  align-self: stretch;

  @media screen and (min-width: 768px) {
    min-width: 50%;
  }

  @media screen and (min-width: 1440px) {
    min-width: 20%;
    max-width: 30%;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
  }
`;

export const MainInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  overflow: hidden;
  max-width: 100%;

  @media screen and (min-width: 1440px) {
    gap: 24px;
  }
`;

export const TitlePriceWrap = styled.div`
  ${FlexAlign}
  justify-content: space-between;
  gap: 24px;
`;

export const Title = styled.p`
  ${TitlesStyles}
`;

export const PriceWrap = styled.div`
  ${FlexAlign}
  gap: 8px;

  button {
    svg {
      fill: transparent;
      stroke: var(--text-color);
      transition: fill var(--cubic-transition);
    }

    @media screen and (min-width: 1440px) {
      &:hover svg,
      &:focus svg {
        fill: var(--accent-red);
        stroke: var(--accent-red);
      }
    }
  }
`;

export const Price = styled.p`
  ${TitlesStyles}
`;

export const RatingLocationWrap = styled.div`
  ${FlexAlign}
  gap: 16px;

  @media screen and (min-width: 1440px) {
    margin-top: -25px;
  }
`;

export const RatingWrap = styled.div`
  ${FlexAlign}
  gap: 5px;

  p {
    text-decoration: underline;
  }
`;

export const LocationWrap = styled.div`
  ${FlexAlign}
  gap: 5px;

  svg {
    fill: none;
    stroke: var(--text-color);
  }
`;

export const Description = styled.p`
  font-size: 16px;
  color: var(--light-text);
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const DetailsList = styled.ul`
  ${FlexAlign}
  flex-wrap: wrap;
  gap: 8px;

  li {
    font-size: 16px;
    font-weight: 500;
    border-radius: 100px;
    padding: 10px 20px;
    color: var(--text-color);
    background-color: var(--grey);

    @media screen and (min-width: 1440px) {
      padding: 12px 24px;
    }

    div {
      ${FlexAlign}
      gap: 5px;

      &.capitalize {
        text-transform: capitalize;
      }
    }

    svg {
      fill: none;
      stroke: var(--text-color);
    }
  }
`;

export const ShowBtn = styled.button`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.08px;
  max-width: 150px;
  border-radius: 200px;
  padding: 16px 0;
  background-color: var(--accent-red);
  color: var(--white);

  @media screen and (min-width: 1440px) {
    max-width: 166px;
    min-height: 56px;
    transition: background-color var(--linear-transition);

    &:hover,
    &:focus {
      background-color: var(--red-hover);
    }
  }
`;
