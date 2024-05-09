import { FC } from "react";
import {
  StyledHero,
  StyledHeroContainer,
  StyledHeroExperienced,
  StyledHeroLink,
  StyledHeroPIcon,
  StyledHeroQuantity,
  StyledHeroText,
  StyledHeroTitle,
  StyledHeroWrapper,
} from "./Hero.styled";
import Icon from "../Icon/Icon";

const Hero: FC = () => {
  return (
    <StyledHeroWrapper>
      <StyledHeroTitle>Make Life Easier for the Family:</StyledHeroTitle>
      <StyledHeroText>Find Babysitters Online for All Occasions</StyledHeroText>
      <StyledHeroLink to={"/nannies"}>
        Get started
        <Icon
          iconName="icon-Arrow-16"
          width="18"
          height="18"
          stroke="var(--lightGrey)"
          fill="var(--lightGrey)"
        />
      </StyledHeroLink>

      <StyledHero>
        <StyledHeroPIcon>
          <Icon
            iconName="icon-fe_check"
            width="30"
            height="30"
            stroke="var(--lightGrey)"
            fill="var(--lightGrey)"
          />
        </StyledHeroPIcon>

        <StyledHeroContainer>
          <StyledHeroExperienced>Experienced nannies</StyledHeroExperienced>
          <StyledHeroQuantity>15,000</StyledHeroQuantity>
        </StyledHeroContainer>
      </StyledHero>
    </StyledHeroWrapper>
  );
};

export default Hero;
