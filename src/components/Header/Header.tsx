import { FC } from "react";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import UserAuth from "../UserAuth/UserAuth";
import { StyledHeaderSection, StyledHeaderWrapper } from "./Header.styled";
import { useLocation } from "react-router-dom";
import UserLogo from "../UserLogo/UserLogo";
import useAuthUser from "../../hooks/useAuthUser";

const Header: FC = () => {
  const { pathname } = useLocation();
  const { isAuthUser } = useAuthUser();

  return (
    <StyledHeaderSection $HeaderSection={pathname === "/" ? "/" : undefined}>
      <StyledHeaderWrapper className="container">
        <Logo />
        <Navigation />
        {!isAuthUser ? <UserAuth /> : <UserLogo />}
      </StyledHeaderWrapper>
    </StyledHeaderSection>
  );
};

export default Header;
