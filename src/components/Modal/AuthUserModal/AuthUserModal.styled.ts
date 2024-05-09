import styled from "styled-components";

export const StyledAuthUserModalWrapper = styled.div`
  width: 710px;
  padding: 68px;
  border-radius: 30px;
  background: var(--lightGrey);
  position: relative;
`;

export const StyledAuthUserModalNitle = styled.h3`
  font-size: 40px;
  font-weight: var(--medium);
  line-height: 1.2;
  letter-spacing: -0.8px;
  margin-bottom: 38px;
`;

export const StyledAuthUserModalContainer = styled.div`
  display: flex;
  gap: 38px;
  justify-content: start;
  align-items: center;
  width: 100%;
`;

export const StyledAuthUserModalLogIn = styled.button`
  display: inline-flex;
  padding: 16px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: var(--green);
  color: var(--navyBlue);
  font-size: 18px;
  font-weight: var(--bold);
  line-height: 1.55;
  transition: var(--transition);
  width: 50%;

  &:hover,
  &:focus {
    background: var(--navyBlue);
    color: var(--grey);
  }
`;

export const StyledAuthUserModalRegistration = styled.button`
  display: inline-flex;
  padding: 16px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: var(--red);
  color: var(--grey);
  font-size: 18px;
  font-weight: var(--bold);
  line-height: 1.55;
  transition: var(--transition);
  width: 50%;

  &:hover,
  &:focus {
    background: var(--navyBlue);
    color: var(--grey);
  }
`;
