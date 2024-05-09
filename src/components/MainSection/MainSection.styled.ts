import styled from "styled-components";

export const StyledMainSection_Main = styled.main``;

interface StyledMainSectionProps {
  $address?: string;
}

export const StyledMainSection_Section = styled.section<StyledMainSectionProps>`
  padding: ${(props) => (props.$address ? "32px" : "64px")} 0;
  background: ${(props) =>
    props.$address ? "var(--lightGrey)" : "var(--grey)"};
`;

export const StyledMainSection_Div = styled.div``;
