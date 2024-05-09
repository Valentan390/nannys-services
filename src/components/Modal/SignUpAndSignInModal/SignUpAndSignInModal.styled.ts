import styled from "styled-components";

export const StyledAuthModalWrapper = styled.div`
  width: 566px;
  border-radius: 30px;
  background: #fbfbfb;
  padding: 64px;
  position: relative;
`;

export const StyledAuthModalTitle = styled.h3`
  color: var(--navyBlue);
  font-size: 40px;
  font-weight: var(--medium);
  line-height: 1.2;
  letter-spacing: -0.8px;
  margin-bottom: 20px;
`;

export const StyledAuthModalText = styled.p`
  color: rgba(17, 16, 28, 0.5);
  font-size: 16px;
  font-weight: var(--regular);
  line-height: 1.25;
  margin-bottom: 40px;
`;

export const StyledAuthModalForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: start;
  align-items: start;
  width: 100%;
`;

export const StyledAuthModalButton = styled.button`
  display: inline-flex;
  padding: 16px 18px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 30px;
  background: var(--red);
  color: var(--lightGrey);
  font-size: 16px;
  font-weight: var(--medium);
  line-height: 1.25;
  letter-spacing: -0.16px;
  width: 100%;
  margin-top: 20px;
  transition: var(--transition);

  &:focus,
  &:hover {
    background: var(--navyBlue);
  }
`;
