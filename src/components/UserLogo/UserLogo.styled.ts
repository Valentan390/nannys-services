import styled from "styled-components";

export const StyledUserLogoWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: max-content;
`;

export const StyledUserLogoPIcon = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: max-content;
  flex-shrink: 0;
  border-radius: 10px;
  background: var(--lightGrey);
  padding: 8px;
  margin-right: 14px;
`;

export const StyledUserLogoUserName = styled.p`
  color: var(--lightGrey);
  font-size: 18px;
  font-weight: var(--medium);
  line-height: 1.11;
  letter-spacing: -0.18px;
  margin-right: 24px;
`;

export const StyledUserLogoLogOut = styled.button`
  display: inline-flex;
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
    color: var(--red);
    background: var(--lightGrey);
  }
`;
