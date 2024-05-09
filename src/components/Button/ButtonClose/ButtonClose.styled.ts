import styled, { keyframes } from "styled-components";

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(180deg);
  }
`;

const rotateBackAnimation = keyframes`
  from {
    transform: rotate(180deg);
  }
  to {
    transform: rotate(0deg);
  }
`;

export const StyledButtonClose = styled.button`
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 20px;
  right: 20px;
  transition: transform 0.3s ease-in-out;
  transform-origin: center;

  &:hover {
    animation: ${rotateAnimation} 0.3s forwards;
  }

  &:not(:hover) {
    animation: ${rotateBackAnimation} 0.3s forwards;
  }
`;

export const StyledButtonCloseSvg = styled.svg`
  width: 32px;
  height: 32px;
  stroke: var(--navyBlue);
`;
