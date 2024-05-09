import styled from "styled-components";
import { IStyledFormInput } from "../../FormInput/FormInput.styled";

export const StyledMakeModalWrapper = styled.div`
  width: 600px;
  border-radius: 30px;
  background: var(--lightGrey);
  padding: 64px;
  position: relative;
`;

export const StyledMakeModalTitle = styled.h3`
  color: var(--navyBlue);
  font-size: 40px;
  font-weight: var(--medium);
  line-height: 1.2;
  letter-spacing: -0.8px;
  margin-bottom: 20px;
`;

export const StyledMakeModalText = styled.p`
  color: rgba(17, 16, 28, 0.5);
  font-size: 16px;
  font-weight: var(--regular);
  line-height: 1.25;
  margin-bottom: 40px;
`;

interface IStyledMakeModalContainer {
  $flexDirection?: boolean;
}

export const StyledMakeModalContainer = styled.div<IStyledMakeModalContainer>`
  display: flex;
  flex-direction: ${({ $flexDirection }) =>
    $flexDirection ? "column" : "none"};
  gap: ${({ $flexDirection }) => ($flexDirection ? "4px" : "14px")};
  justify-content: start;
  align-items: ${({ $flexDirection }) => ($flexDirection ? "start" : "center")};
  width: 100%;
  margin-bottom: ${({ $flexDirection }) => ($flexDirection ? "none" : "40px")};
`;

export const StyledMakeModalFoto = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 15px;
`;

interface IStyledMakeModalP {
  $grey?: boolean;
}

export const StyledMakeModalP = styled.p<IStyledMakeModalP>`
  color: ${({ $grey }) => ($grey ? "#8a8a89" : "var(--navyBlue)")};
  font-size: ${({ $grey }) => ($grey ? "12px" : "16px")};
  font-weight: 500;
  line-height: ${({ $grey }) => ($grey ? "1.33" : "1.5")};
`;

export const StyledMakeModalForm = styled.form`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
  row-gap: 16px;
  column-gap: 8px;
`;
export const StyledMakeModalTextarea = styled.textarea<IStyledFormInput>`
  display: inline-flex;
  padding: 18px 16px;
  justify-content: center;
  align-items: center;
  gap: 18px;
  border-radius: 12px;
  border: 1px solid
    ${(props) => (props.$error ? "var(--red)" : "rgba(17, 16, 28, 0.1)")};
  color: ${(props) => (props.$error ? "var(--red)" : "var(--navyBlue)")};
  font-size: 16px;
  font-weight: var(--regular);
  line-height: 1.25;
  width: 100%;
  height: 118px;
  resize: none;

  &::placeholder {
    color: ${(props) => (props.$error ? "var(--red)" : "var(--navyBlue)")};
  }

  &:hover {
    border-color: ${(props) =>
      props.$error ? "var(--red)" : "rgba(25, 26, 21, 0.3)"};
    background-color: ${(props) =>
      props.$error ? "transparent" : "transparent"};
    box-shadow: ${(props) =>
      props.$error ? "none" : "0 0 10px rgba(0, 0, 0, 0.3)"};
  }

  &:focus {
    outline: none;
    border-color: ${(props) =>
      props.$error ? "var(--red)" : "rgba(25, 26, 21, 0.3)"};
    box-shadow: ${(props) =>
      props.$error
        ? "0 0 0 3px rgba(255, 0, 0, 0.3)"
        : "0 0 10px rgba(0, 0, 0, 0.3)"};
  }
`;

export const StyledMakeModalButton = styled.button`
  display: inline-flex;
  padding: 16px 38px;
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
  transition: var(--transition);

  &:hover {
    background: var(--green);
    color: var(--navyBlue);
  }
`;
