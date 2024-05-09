import { FC } from "react";
import SignUpAndSignInModal from "../Modal/SignUpAndSignInModal/SignUpAndSignInModal";
import useModalHandler from "../../hooks/useModalHandler";
import AuthUserModal from "../Modal/AuthUserModal/AuthUserModal";
import LogOutModal from "../Modal/LogOutModal/LogOutModal";
import MakeAnAppointmentModal from "../Modal/MakeAnAppointmentModal/MakeAnAppointmentModal";

const ModalContent: FC = () => {
  const { contentModal } = useModalHandler();

  switch (contentModal) {
    case "UserSignUpModal":
      return <SignUpAndSignInModal typeModal="SignUp" />;
    case "UserSignInModal":
      return <SignUpAndSignInModal typeModal="SignIn" />;
    case "AuthUserModal":
      return <AuthUserModal />;
    case "LogOutModal":
      return <LogOutModal />;
    case "MakeAnAppointmentModal":
      return <MakeAnAppointmentModal />;
    default:
      return null;
  }
};

export default ModalContent;
