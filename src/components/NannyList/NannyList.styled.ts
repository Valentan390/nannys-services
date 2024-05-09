import styled from "styled-components";

export const StyledNannyListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
  justify-content: start;
  align-items: start;
  width: 100%;
`;

export const StyledNannyListButton = styled.button`
  margin-left: auto;
  margin-right: auto;
  margin-top: 64px;
  display: block;
  padding: 14px 40px;
  border-radius: 30px;
  background: var(--red);
  color: var(--lightGrey);
  font-size: 16px;
  font-weight: var(--medium);
  line-height: 1.25;
  letter-spacing: -0.16px;
  transition: var(--navyBlue);

  &:hover {
    background: var(--red);
  }
`;
