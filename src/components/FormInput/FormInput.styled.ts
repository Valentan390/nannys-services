import styled from "styled-components";

interface IStyledFormInputLabel {
  $width?: boolean;
}

export const StyledFormInputLabel = styled.label<IStyledFormInputLabel>`
  width: ${({ $width }) => ($width ? "calc((100% - 8px) / 2)" : "100%")};
  position: relative;
`;

export interface IStyledFormInput {
  $error?: boolean;
}

export const StyledFormInput = styled.input<IStyledFormInput>`
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

export const StyledFormError = styled.p`
  position: absolute;
  left: 0;
  bottom: -13px;
  color: var(--red);
  font-size: 10px;
  font-weight: var(--regular);
  line-height: 1.1;
`;
// export const StyledFormInput = styled.``
// export const StyledFormInput = styled.``
