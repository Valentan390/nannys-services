import { FC, ReactNode } from "react";
import { useLocation } from "react-router-dom";
import {
  StyledMainSection_Div,
  StyledMainSection_Main,
  StyledMainSection_Section,
} from "./MainSection.styled";

interface MainSectionProps {
  children: ReactNode;
}

const MainSection: FC<MainSectionProps> = ({ children }) => {
  const { pathname } = useLocation();
  return (
    <StyledMainSection_Main>
      <StyledMainSection_Section $address={pathname === "/" ? "/" : undefined}>
        <StyledMainSection_Div
          className={pathname === "/" ? undefined : "container"}
        >
          {children}
        </StyledMainSection_Div>
      </StyledMainSection_Section>
    </StyledMainSection_Main>
  );
};

export default MainSection;
