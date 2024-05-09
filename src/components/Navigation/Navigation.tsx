import { FC } from "react";
import {
  navigationNotAuthUser,
  navigationsAuthUser,
} from "../../helpers/componentsData";
import {
  StyledNavigationNavLink,
  StyledNavigationWrapper,
} from "./Navigation.styled";
import useAuthUser from "../../hooks/useAuthUser";

const Navigation: FC = () => {
  const { isAuthUser } = useAuthUser();

  const navigatons = isAuthUser ? navigationsAuthUser : navigationNotAuthUser;
  return (
    <StyledNavigationWrapper>
      {navigatons.map(({ to, text }) => (
        <StyledNavigationNavLink key={to} to={to}>
          {text}
        </StyledNavigationNavLink>
      ))}
    </StyledNavigationWrapper>
  );
};

export default Navigation;
