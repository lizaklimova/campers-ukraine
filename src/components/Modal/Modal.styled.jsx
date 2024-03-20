import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--backdrop);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Window = styled.div`
  position: relative;
  width: 100%;
  height: 90vh;
  border-radius: 20px;
  padding: 20px;
  background-color: var(--white);

  @media screen and (min-width: 1440px) {
    padding: 40px;
  }
`;

export const Content = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const HeadInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  #rating-wrap {
    margin-top: -15px;
  }

  #description {
    margin-bottom: 40px;
  }
`;

export const PicsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  overflow-x: auto;

  &::-webkit-scrollbar {
    height: 7px;
  }

  li {
    width: calc(100% / 3);
    display: flex;
    align-items: center;
  }

  img {
    border-radius: 10px;
    object-fit: cover;
    width: 100%;
    align-self: stretch;
    margin-bottom: 5px;
  }
`;

export const CLoseBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;

  svg {
    stroke: var(--text-color);
    transition: stroke var(--linear-transition);
  }

  @media screen and (min-width: 1440px) {
    top: 40px;
    right: 40px;

    &:hover svg,
    &:focus svg {
      stroke: var(--accent-red);
    }
  }
`;
