import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/useReduxHooks";
import { sortNannys } from "../../redux/nannys/nannysSelectors";
import { useLocation } from "react-router-dom";
import NannyItem from "../NannyItem/NannyItem";
import { setCarrentPage } from "../../redux/nannys/nannysSlice";
import {
  StyledNannyListButton,
  StyledNannyListWrapper,
} from "./NannyList.styled";
import { sortFavoriteNannys } from "../../redux/favorite/favoriteSelectors";

const NannyList: FC = () => {
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();
  const selecSortNannys =
    pathname === "/nannies" ? sortNannys : sortFavoriteNannys;
  const renderNannys = useAppSelector(selecSortNannys);

  return (
    <div>
      <StyledNannyListWrapper>
        {renderNannys?.map((nanny, index) => (
          <NannyItem key={index} nanny={nanny} />
        ))}
      </StyledNannyListWrapper>

      {pathname === "/nannies" &&
        renderNannys.length < 27 &&
        !(renderNannys.length <= 0) && (
          <StyledNannyListButton
            type="button"
            onClick={() => dispatch(setCarrentPage())}
          >
            Load more
          </StyledNannyListButton>
        )}
    </div>
  );
};

export default NannyList;
