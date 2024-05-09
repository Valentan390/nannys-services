import styled from "styled-components";

interface StyledHeaderSectionProps {
  $HeaderSection?: string;
}

export const StyledHeaderSection = styled.section<StyledHeaderSectionProps>`
  padding: 20px 0;
  width: 100%;
  position: ${(props) => (props.$HeaderSection ? "absolute" : "none")};
  background: ${(props) => (props.$HeaderSection ? "" : "var(--red)")};
  top: 32px;
  left: 0;
  border-bottom: 1px solid rgba(251, 251, 251, 0.4);
`;

export const StyledHeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

// export const StyledHeader = styled.``
// export const StyledHeader = styled.``
// export const StyledHeader = styled.``
