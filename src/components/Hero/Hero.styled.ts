import styled from "styled-components";
import Rectangle1x from "../../images/desctop/Rectangle1.webp";
import Rectangle2x from "../../images/desctop/Rectangle1@2x.webp";
import { Link } from "react-router-dom";

export const StyledHeroWrapper = styled.div`
  width: 1376px;
  flex-shrink: 0;
  border-radius: 30px;
  margin: 0 auto;
  padding: 251px 50px 50px 96px;

  background: linear-gradient(to right, #f03f3b 50%, transparent 50%),
    url(${Rectangle1x}) lightgray right / contain no-repeat;

  @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
    background: linear-gradient(to right, #f03f3b 50%, transparent 50%),
      url(${Rectangle2x}) lightgray right / contain no-repeat;
  }
`;

export const StyledHeroTitle = styled.h1`
  color: var(--lightGrey);
  font-size: 70px;
  font-weight: var(--medium);
  line-height: 1;
  letter-spacing: -2.1px;
  margin-bottom: 28px;
  max-width: 517px;
`;
export const StyledHeroText = styled.p`
  color: var(--lightGrey);
  font-size: 28px;
  font-weight: var(--regular);
  line-height: 1.07;
  letter-spacing: -0.56px;
  margin-bottom: 64px;
  max-width: 517px;
`;
export const StyledHeroLink = styled(Link)`
  display: flex;
  padding: 18px 50px;
  justify-content: center;
  align-items: center;
  gap: 18px;
  border-radius: 30px;
  border: 1px solid rgba(251, 251, 251, 0.4);
  color: var(--lightGrey);
  font-size: 20px;
  font-weight: var(--medium);
  line-height: 1.2;
  letter-spacing: -0.2px;
  max-width: 321px;
  transition: var(--transition);

  &:hover,
  &:focus {
    color: var(--red);
    background: var(--lightGrey);

    svg {
      stroke: var(--red);
      fill: var(--red);
    }
  }
`;
export const StyledHero = styled.div`
  width: max-content;
  border-radius: 20px;
  background: var(--lightGrey);
  flex-shrink: 0;
  padding: 32px;
  display: flex;
  gap: 16px;
  justify-content: start;
  align-items: center;
  margin-left: auto;
`;
export const StyledHeroPIcon = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: max-content;
  height: max-content;
  flex-shrink: 0;
  border-radius: 13px;
  background: var(--red);
  padding: 12px;
`;
export const StyledHeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  justify-content: start;
  align-items: start;
  width: max-content;
`;
export const StyledHeroExperienced = styled.p`
  color: rgba(17, 16, 28, 0.5);
  font-size: 16px;
  font-weight: var(--regular);
  line-height: normal;
`;
export const StyledHeroQuantity = styled.p`
  color: var(--navyBlue);
  font-size: 24px;
  font-weight: var(--bold);
  line-height: normal;
`;
