import { FC } from "react";
import ButtonClose from "../../Button/ButtonClose/ButtonClose";
import useModalHandler from "../../../hooks/useModalHandler";
import { useAppDispatch } from "../../../hooks/useReduxHooks";
import { toast } from "react-toastify";
import { setLogOut } from "../../../redux/userAuth/userAuthSlice";
import {
  StyledLogoUtModalCancel,
  StyledLogoUtModalCantainer,
  StyledLogoUtModalLogOut,
  StyledLogoUtModalTitle,
  StyledLogoUtModalWrapper,
} from "./LogOutModal.styled";

const LogOutModal: FC = () => {
  const { handleCloseModal } = useModalHandler();
  const dispatch = useAppDispatch();

  const toggleLogoutModal = async () => {
    try {
      await dispatch(setLogOut());
      handleCloseModal();
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("An error occurred");
      }
    }
  };
  return (
    <StyledLogoUtModalWrapper>
      <ButtonClose />
      <StyledLogoUtModalTitle>
        Do you really want to leave?
      </StyledLogoUtModalTitle>
      <StyledLogoUtModalCantainer>
        <StyledLogoUtModalCancel type="button" onClick={handleCloseModal}>
          Cancel
        </StyledLogoUtModalCancel>
        <StyledLogoUtModalLogOut type="button" onClick={toggleLogoutModal}>
          Log Out
        </StyledLogoUtModalLogOut>
      </StyledLogoUtModalCantainer>
    </StyledLogoUtModalWrapper>
  );
};

export default LogOutModal;
