import { FC, useEffect } from "react";
import MainSection from "../../components/MainSection/MainSection";
import NannyList from "../../components/NannyList/NannyList";
import useAuthUser from "../../hooks/useAuthUser";
import { useAppDispatch } from "../../hooks/useReduxHooks";
import { getFavoriteNannys } from "../../redux/favorite/operationsFavorite";
import FilterNannys from "../../components/FilterNannys/FilterNannys";

const FavoritesPage: FC = () => {
  const { isAuthUser, user } = useAuthUser();
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (isAuthUser) {
      dispatch(getFavoriteNannys(user.id));
    }
  }, [dispatch, isAuthUser, user.id]);
  return (
    <MainSection>
      <FilterNannys />
      <NannyList />
    </MainSection>
  );
};

export default FavoritesPage;
