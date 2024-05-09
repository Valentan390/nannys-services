import { FC } from "react";
import sprite from "../../../images/svg/sprite.svg";
import { StyledButtonEyeButton, StyledButtonEyeSvg } from "./ButtonEye.styled";

interface ButtonEyeProps {
  passwordVisible: boolean;
  togglePasswordVisibility: () => void;
}

const ButtonEye: FC<ButtonEyeProps> = ({
  passwordVisible,
  togglePasswordVisibility,
}) => {
  return (
    <StyledButtonEyeButton type="button" onClick={togglePasswordVisibility}>
      <StyledButtonEyeSvg>
        <use href={`${sprite}#icon-${passwordVisible ? "eye" : "eye-off"}`} />
      </StyledButtonEyeSvg>
    </StyledButtonEyeButton>
  );
};

export default ButtonEye;
