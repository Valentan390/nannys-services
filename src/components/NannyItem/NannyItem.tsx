import { FC, useState } from "react";
import { Nanny } from "../../helpers/interfeceData";
import Icon from "../Icon/Icon";
import {
  StyledNannyItemContainer,
  StyledNannyItemContainerFoto,
  StyledNannyItemFoto,
  StyledNannyItemHeart,
  StyledNannyItemLi,
  StyledNannyItemNanny,
  StyledNannyItemNannyContainer,
  StyledNannyItemNannyName,
  StyledNannyItemPBlack,
  StyledNannyItemP,
  StyledNannyItemSpan,
  StyledNannyItemAbaut,
  StyledNannyItemReadMore,
} from "./NannyItem.styled";
import NannyReviews from "../NannyReviews/NannyReviews";
import useAuthUser from "../../hooks/useAuthUser";
import { useAppDispatch, useAppSelector } from "../../hooks/useReduxHooks";
import {
  addFaforiteNanny,
  deleteFavoriteNanny,
} from "../../redux/favorite/operationsFavorite";
import { selectFavoriteNannys } from "../../redux/favorite/favoriteSelectors";
import useModalHandler from "../../hooks/useModalHandler";

interface NannyItemProps {
  nanny: Nanny;
}

const NannyItem: FC<NannyItemProps> = ({ nanny }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const difference = new Date().getTime() - new Date(nanny.birthday).getTime();
  const age = Math.floor(difference / (1000 * 60 * 60 * 24 * 365));

  const { user, isAuthUser } = useAuthUser();
  const dispatch = useAppDispatch();
  const favoriteNannys = useAppSelector(selectFavoriteNannys);
  const { handleOpenModal } = useModalHandler();

  const isFavotite = isAuthUser
    ? favoriteNannys?.some((favoriteNanny) => favoriteNanny.name === nanny.name)
    : false;

  const toggleFavorite = () => {
    if (isAuthUser) {
      if (isFavotite) {
        dispatch(
          deleteFavoriteNanny({ userId: user.id, nannyName: nanny.name })
        );
      } else {
        dispatch(addFaforiteNanny({ userId: user.id, nanny }));
      }
    } else {
      handleOpenModal("AuthUserModal");
    }
  };

  return (
    <StyledNannyItemLi>
      <StyledNannyItemContainerFoto>
        <StyledNannyItemFoto src={nanny.avatar_url} alt={nanny.name} />
        <Icon
          iconName="icon-Group-82"
          width="14"
          height="14"
          position="absolute"
          top="10px"
          right="10px"
        />
      </StyledNannyItemContainerFoto>

      <StyledNannyItemNannyContainer>
        <StyledNannyItemNanny>
          <StyledNannyItemP>Nanny</StyledNannyItemP>
          <StyledNannyItemContainer $container={true}>
            <StyledNannyItemContainer>
              <Icon
                iconName="icon-map-pin"
                width="16"
                height="16"
                fill="none"
                stroke="var(--navyBlue)"
              />
              <StyledNannyItemPBlack>{nanny.location}</StyledNannyItemPBlack>
            </StyledNannyItemContainer>
            <Icon
              iconName="icon-Vector-4"
              width="4"
              height="16"
              stroke="rgba(17, 16, 28, 0.20)"
            />

            <StyledNannyItemContainer>
              <Icon iconName="icon-star" width="16" height="16" />
              <StyledNannyItemPBlack>
                Rating:{" "}
                <StyledNannyItemSpan $green={true}>
                  {nanny.rating}
                </StyledNannyItemSpan>
              </StyledNannyItemPBlack>
            </StyledNannyItemContainer>

            <Icon
              iconName="icon-Vector-4"
              width="4"
              height="16"
              stroke="rgba(17, 16, 28, 0.20)"
            />

            <StyledNannyItemPBlack>
              Price / 1 hour:{" "}
              <StyledNannyItemSpan $green={true}>
                {nanny.price_per_hour}$
              </StyledNannyItemSpan>
            </StyledNannyItemPBlack>

            <StyledNannyItemHeart type="button" onClick={toggleFavorite}>
              <Icon
                iconName="icon-Vector"
                width="26"
                height="26"
                fill={isFavotite ? "var(--red)" : "none"}
                stroke={isFavotite ? "none" : "var(--navyBlue)"}
              />
            </StyledNannyItemHeart>
          </StyledNannyItemContainer>
        </StyledNannyItemNanny>

        <StyledNannyItemNannyName>{nanny.name}</StyledNannyItemNannyName>

        <StyledNannyItemContainer $marginBottom={true}>
          <StyledNannyItemP $displayFlex={true}>
            Age: <StyledNannyItemSpan>{age}</StyledNannyItemSpan>
          </StyledNannyItemP>

          <StyledNannyItemP $displayFlex={true}>
            Experience:{" "}
            <StyledNannyItemSpan>{nanny.experience}</StyledNannyItemSpan>
          </StyledNannyItemP>

          <StyledNannyItemP $displayFlex={true}>
            Kids Age:{" "}
            <StyledNannyItemSpan>{nanny.kids_age}</StyledNannyItemSpan>
          </StyledNannyItemP>

          <StyledNannyItemP $displayFlex={true}>
            Characters:{" "}
            {nanny.characters.map((character, index) => (
              <StyledNannyItemSpan key={index}>
                {character}
                {index !== nanny.characters.length - 1 ? ", " : "."}
              </StyledNannyItemSpan>
            ))}
          </StyledNannyItemP>
          <StyledNannyItemP $displayFlex={true}>
            Education:{" "}
            <StyledNannyItemSpan>{nanny.education}</StyledNannyItemSpan>
          </StyledNannyItemP>
        </StyledNannyItemContainer>

        <StyledNannyItemAbaut>{nanny.about}</StyledNannyItemAbaut>

        {showFullDescription && (
          <NannyReviews reviews={nanny.reviews} nanny={nanny} />
        )}

        <StyledNannyItemReadMore
          type="button"
          onClick={() => setShowFullDescription(!showFullDescription)}
        >
          {showFullDescription ? "Read less" : "Read more"}
        </StyledNannyItemReadMore>
      </StyledNannyItemNannyContainer>
    </StyledNannyItemLi>
  );
};

export default NannyItem;
