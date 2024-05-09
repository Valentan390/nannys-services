import styled from "styled-components";

export const StyledNannyReviewsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 25px;
  justify-content: start;
  align-items: start;
  width: 100%;
  margin: 48px 0;
`;

export const StyledNannyReviewsItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: start;
  align-items: start;
  width: 100%;
`;

export const StyledNannyReviewsReviewer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  justify-content: start;
  align-items: start;
  width: 100%;
`;

interface IStyledNannyReviewsContainer {
  $gap?: string;
}

export const StyledNannyReviewsContainer = styled.div<IStyledNannyReviewsContainer>`
  display: flex;
  gap: ${(props) => (props.$gap ? "8px" : "16px")};
  justify-content: start;
  align-items: center;
  width: 100%;
`;

export const StyledNannyReview = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  background: rgba(240, 63, 59, 0.2);
  width: 44px;
  height: 44px;
  color: var(--red);
  font-size: 20px;
  font-weight: var(--medium);
  line-height: 1;
  padding: 20px;
`;

interface IStyledNannyReviewsName {
  $rating?: boolean;
  $comment?: boolean;
}

export const StyledNannyReviewsName = styled.p<IStyledNannyReviewsName>`
  color: ${({ $comment }) =>
    $comment ? "rgba(17, 16, 28, 0.50)" : "var(--navyBlue)"};
  font-size: ${({ $rating }) => ($rating ? "14px" : "16px")};
  font-weight: ${({ $comment }) => ($comment ? "400" : "500")};
  line-height: ${({ $rating }) => ($rating ? "1.28" : "1.25")};
`;

export const StyledNannyReviewsButton = styled.button`
  display: inline-flex;
  padding: 14px 28px;
  margin-right: 33px;
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
  transition: var(--transition);

  &:hover {
    background: var(--green);
  }
`;
