import { FC } from "react";
import Icon from "../Icon/Icon";
import {
  StyledUserLogoLogOut,
  StyledUserLogoPIcon,
  StyledUserLogoUserName,
  StyledUserLogoWrapper,
} from "./UserLogo.styled";
import useAuthUser from "../../hooks/useAuthUser";
import useModalHandler from "../../hooks/useModalHandler";

const UserLogo: FC = () => {
  const { user } = useAuthUser();
  const { handleOpenModal } = useModalHandler();

  return (
    <StyledUserLogoWrapper>
      <StyledUserLogoPIcon>
        <Icon
          iconName="icon-mdi_user"
          width="24"
          height="24"
          fill="var(--red)"
        />
      </StyledUserLogoPIcon>
      <StyledUserLogoUserName>{user.userName}</StyledUserLogoUserName>
      <StyledUserLogoLogOut
        type="button"
        onClick={() => handleOpenModal("LogOutModal")}
      >
        Log out
      </StyledUserLogoLogOut>
    </StyledUserLogoWrapper>
  );
};

export default UserLogo;
