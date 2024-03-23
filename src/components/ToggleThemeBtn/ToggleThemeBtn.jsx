import IconButton from "@mui/material/IconButton";
import { GoSun } from "react-icons/go";
import { PiMoonStarsThin } from "react-icons/pi";
import useTheme from "hooks";
import { ButtonWrap } from "./ToggleThemeBtn.styled";

const ToggleThemeBtn = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <ButtonWrap>
      <IconButton onClick={toggleTheme}>
        {theme === "dark" ? (
          <PiMoonStarsThin size={20} fill="var(--background)" />
        ) : (
          <GoSun size={20} fill="var(--background)" />
        )}
      </IconButton>
    </ButtonWrap>
  );
};

export default ToggleThemeBtn;
