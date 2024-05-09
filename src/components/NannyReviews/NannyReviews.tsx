import { FC } from "react";
import { Nanny, Review } from "../../helpers/interfeceData";
import Icon from "../Icon/Icon";
import {
  StyledNannyReview,
  StyledNannyReviewsButton,
  StyledNannyReviewsContainer,
  StyledNannyReviewsItem,
  StyledNannyReviewsList,
  StyledNannyReviewsName,
  StyledNannyReviewsReviewer,
} from "./NannyReviews.styled";
import useModalHandler from "../../hooks/useModalHandler";

interface NannyReviewsProps {
  reviews: Review[];
  nanny: Nanny;
}

const NannyReviews: FC<NannyReviewsProps> = ({ reviews, nanny }) => {
  const { handleOpenModal } = useModalHandler();
  return (
    <>
      <StyledNannyReviewsList>
        {reviews.map(({ comment, rating, reviewer }) => (
          <StyledNannyReviewsItem key={reviewer}>
            <StyledNannyReviewsContainer>
              <StyledNannyReview>{reviewer[0]}</StyledNannyReview>
              <StyledNannyReviewsReviewer>
                <StyledNannyReviewsName>{reviewer}</StyledNannyReviewsName>
                <StyledNannyReviewsContainer $gap="8px">
                  <Icon iconName="icon-star" width="16" height="16" />
                  <StyledNannyReviewsName $rating={true}>
                    {rating}
                  </StyledNannyReviewsName>
                </StyledNannyReviewsContainer>
              </StyledNannyReviewsReviewer>
            </StyledNannyReviewsContainer>
            <StyledNannyReviewsName $comment={true}>
              {comment}
            </StyledNannyReviewsName>
          </StyledNannyReviewsItem>
        ))}
      </StyledNannyReviewsList>
      <StyledNannyReviewsButton
        type="button"
        onClick={() => handleOpenModal("MakeAnAppointmentModal", nanny)}
      >
        Make an appointment
      </StyledNannyReviewsButton>
    </>
  );
};

export default NannyReviews;
