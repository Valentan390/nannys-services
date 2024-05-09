import { FC } from "react";
import styled from "../../../images/svg/sprite.svg";
import { StyledButtonClose, StyledButtonCloseSvg } from "./ButtonClose.styled";
import useModalHandler from "../../../hooks/useModalHandler";

const ButtonClose: FC = () => {
  const { handleCloseModal } = useModalHandler();
  return (
    <StyledButtonClose onClick={handleCloseModal}>
      <StyledButtonCloseSvg>
        <use href={`${styled}#icon-x`} />
      </StyledButtonCloseSvg>
    </StyledButtonClose>
  );
};

export default ButtonClose;
