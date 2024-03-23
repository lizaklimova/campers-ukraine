import MainContainer from "layouts/MainContainer";
import Hero from "components/Hero";
import PicturesSection from "components/PicturesSection";
import ToggleThemeBtn from "components/ToggleThemeBtn";
import { MainWrapper } from "components/ToggleThemeBtn/ToggleThemeBtn.styled";

const Main = () => {
  return (
    <MainWrapper>
      <MainContainer>
        <ToggleThemeBtn />
      </MainContainer>
      <Hero />
      <PicturesSection />
    </MainWrapper>
  );
};

export default Main;
