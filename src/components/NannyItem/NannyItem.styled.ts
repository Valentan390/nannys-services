import styled from "styled-components";

export const StyledNannyItemLi = styled.li`
  display: flex;
  gap: 24px;
  justify-content: start;
  align-items: start;
  padding: 24px;
  border-radius: 24px;
  background: var(--lightGrey);
  width: 100%;
`;

export const StyledNannyItemContainerFoto = styled.div`
  width: 120px;
  height: 120px;
  flex-shrink: 0;
  border-radius: 30px;
  border: 2px solid rgba(240, 63, 59, 0.2);
  padding: 12px;
  position: relative;
`;

export const StyledNannyItemFoto = styled.img`
  width: 96px;
  height: 96px;
  flex-shrink: 0;
  border-radius: 15px;
`;

export const StyledNannyItemNannyContainer = styled.div`
  width: 100%;
`;

export const StyledNannyItemNanny = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 8px;
`;

interface IStyledNannyItemContainer {
  $container?: boolean;
  $marginBottom?: boolean | undefined;
}

export const StyledNannyItemContainer = styled.div<IStyledNannyItemContainer>`
  display: flex;
  flex-wrap: wrap;
  gap: ${(props) => (props.$container ? "16px" : "8px")};
  justify-content: start;
  align-items: center;
  //   width: max-content;
  margin-bottom: ${(props) => (props.$marginBottom ? "8px" : "0")};
`;

export const StyledNannyItemNannyName = styled.h3`
  color: var(--navyBlue);
  font-size: 24px;
  font-weight: var(--medium);
  line-height: 1;
  margin-bottom: 24px;
`;

export const StyledNannyItemAbaut = styled.p`
  color: rgba(17, 16, 28, 0.5);
  font-size: 16px;
  font-weight: var(--regular);
  line-height: 1.25;
  margin-top: 18px;
  margin-bottom: 14px;
`;

interface IStyledNannyItemP {
  $displayFlex?: boolean;
}

export const StyledNannyItemP = styled.p<IStyledNannyItemP>`
  color: #8a8a89;
  font-size: 16px;
  font-weight: var(--medium);
  line-height: 1.5;

  display: ${(props) => (props.$displayFlex ? "inline-flex" : undefined)};
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: ${(props) => (props.$displayFlex ? "24px" : undefined)};
  background: ${(props) => (props.$displayFlex ? "var(--grey)" : undefined)};
`;

export const StyledNannyItemPBlack = styled.p`
  color: var(--navyBlue);
  font-size: 16px;
  font-weight: var(--medium);
  line-height: 1.5;
`;

interface IStyledNannyItemSpan {
  $green?: boolean;
}

export const StyledNannyItemSpan = styled.span<IStyledNannyItemSpan>`
  color: ${(props) => (props.$green ? "var(--green)" : "var(--navyBlue)")};
  font-size: 16px;
  font-weight: var(--medium);
  line-height: 1.5;
`;

export const StyledNannyItemHeart = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 32px;
  padding: 0;
`;

export const StyledNannyItemReadMore = styled.button`
  color: var(--navyBlue);
  font-size: 16px;
  font-weight: var(--medium);
  line-height: 1.5;
  text-decoration-line: underline;
  padding: 0;
`;
