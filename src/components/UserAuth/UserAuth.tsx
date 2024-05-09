import { FC } from "react";
import {
  StyledUserAuthLogIn,
  StyledUserAuthRegistration,
  StyledUserAuthWrapper,
} from "./UserAuth.styled";
import useModalHandler from "../../hooks/useModalHandler";

const UserAuth: FC = () => {
  const { handleOpenModal } = useModalHandler();
  return (
    <StyledUserAuthWrapper>
      <StyledUserAuthLogIn
        type="button"
        onClick={() => handleOpenModal("UserSignInModal")}
      >
        Log In
      </StyledUserAuthLogIn>
      <StyledUserAuthRegistration
        type="button"
        onClick={() => handleOpenModal("UserSignUpModal")}
      >
        Registration
      </StyledUserAuthRegistration>
    </StyledUserAuthWrapper>
  );
};

export default UserAuth;
