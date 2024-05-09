import styled from "styled-components";

export const StyledInputAuthLabel = styled.label`
  width: 100%;
  position: relative;
`;

interface StyledInputAuthInputProps {
  $error?: boolean;
}

export const StyledInputAuthInput = styled.input<StyledInputAuthInputProps>`
  display: flex;
  padding: 16px 18px;
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

export const StyledInputAuthError = styled.p`
  position: absolute;
  left: 0;
  bottom: -18px;
  color: var(--red);
  font-size: 10px;
  font-weight: var(--regular);
  line-height: 1.1;
`;
