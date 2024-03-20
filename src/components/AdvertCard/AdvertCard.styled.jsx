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
  /* flex-direction: column; */
  justify-content: space-between;
  gap: 15px;
  width: 100%;
  border-radius: 20px;
  border: 1px solid var(--border-color);
  padding: 15px;
  background: var(--white);
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const VanPic = styled.img`
  width: 100%;
  height: 30%;
  border-radius: 10px;

  @media screen and (min-width: 768px) {
    max-width: 30%;
    height: 100%;
  }
`;

export const MainInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  /* overflow: hidden; */
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
      fill: none;
      stroke: var(--text-color);
      transition: fill 750ms linear;
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
`;

export const RatingWrap = styled.div`
  ${FlexAlign}
  gap: 5px;
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
`;

export const ShowBtn = styled.button`
  width: 150px;
  border-radius: 200px;
  padding: 16px 0;
  background-color: var(--accent-red);
  color: var(--white);

  &:hover,
  &:focus {
  }
`;
