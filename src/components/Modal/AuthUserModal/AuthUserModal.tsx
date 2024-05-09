import { FC } from "react";
import ButtonClose from "../../Button/ButtonClose/ButtonClose";
import useModalHandler from "../../../hooks/useModalHandler";
import { toast } from "react-toastify";
import {
  StyledAuthUserModalContainer,
  StyledAuthUserModalLogIn,
  StyledAuthUserModalNitle,
  StyledAuthUserModalRegistration,
  StyledAuthUserModalWrapper,
} from "./AuthUserModal.styled";

const AuthUserModal: FC = () => {
  const { handleCloseModal, handleOpenModal } = useModalHandler();

  const openModal = async (modalName: string) => {
    try {
      await handleCloseModal();
      await handleOpenModal(modalName);
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("An error occurred");
      }
    }
  };

  return (
    <StyledAuthUserModalWrapper>
      <ButtonClose />
      <StyledAuthUserModalNitle>
        {" "}
        Please register or log into the application using your username.
      </StyledAuthUserModalNitle>
      <StyledAuthUserModalContainer>
        <StyledAuthUserModalLogIn
          type="button"
          onClick={() => openModal("UserSignInModal")}
        >
          Log in
        </StyledAuthUserModalLogIn>
        <StyledAuthUserModalRegistration
          type="button"
          onClick={() => openModal("UserSignUpModal")}
        >
          Registration
        </StyledAuthUserModalRegistration>
      </StyledAuthUserModalContainer>
    </StyledAuthUserModalWrapper>
  );
};

export default AuthUserModal;
