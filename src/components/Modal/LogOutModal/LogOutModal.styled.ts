import styled from "styled-components";

export const StyledLogoUtModalWrapper = styled.div`
  width: 633px;
  border-radius: 30px;
  background: var(--lightGrey);
  padding: 64px;
  position: relative;
`;

export const StyledLogoUtModalTitle = styled.h3`
  color: var(--navyBlue);
  font-size: 40px;
  font-weight: var(--medium);
  line-height: 1.2;
  letter-spacing: -0.8px;
  margin-bottom: 40px;
`;

export const StyledLogoUtModalCantainer = styled.div`
  display: flex;
  gap: 50px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const StyledLogoUtModalCancel = styled.button`
  display: flex;
  width: 50%;
  padding: 16px 80px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: var(--green);
  color: var(--navyBlue);
  font-size: 18px;
  font-weight: var(--bold);
  line-height: 1.55;
  transition: var(--transition);

  &:hover,
  &:focus {
    background: var(--navyBlue);
    color: var(--grey);
  }
`;

export const StyledLogoUtModalLogOut = styled.button`
  display: flex;
  width: 50%;
  padding: 16px 80px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: var(--red);
  color: var(--navyBlue);
  font-size: 18px;
  font-weight: var(--bold);
  line-height: 1.55;
  transition: var(--transition);

  &:hover,
  &:focus {
    background: var(--navyBlue);
    color: var(--grey);
  }
`;
