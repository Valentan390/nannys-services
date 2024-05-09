import styled from "styled-components";

export const StyledUserAuthWrapper = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  width: max-content;
`;

export const StyledUserAuthLogIn = styled.button`
  display: flex;
  padding: 14px 39px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 30px;
  border: 1px solid rgba(251, 251, 251, 0.4);
  color: var(--lightGrey);
  font-size: 16px;
  font-weight: var(--medium);
  line-height: 1.25;
  letter-spacing: -0.16px;
  transition: var(--transition);

  &:hover,
  &:focus {
    background: var(--lightGrey);
    color: var(--red);
  }
`;

export const StyledUserAuthRegistration = styled.button`
  display: flex;
  padding: 14px 40px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 30px;
  border: 1px solid rgba(251, 251, 251, 0.4);
  background: var(--red);
  color: var(--lightGrey);
  font-size: 16px;
  font-weight: var(--medium);
  line-height: 1.25;
  letter-spacing: -0.16px;
  transition: var(--transition);

  &:hover,
  &:focus {
    background: var(--lightGrey);
    color: var(--red);
  }
`;
