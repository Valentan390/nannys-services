import { FC, useEffect } from "react";
import MainSection from "../../components/MainSection/MainSection";
import NannyList from "../../components/NannyList/NannyList";
import { useAppDispatch } from "../../hooks/useReduxHooks";
import useAuthUser from "../../hooks/useAuthUser";
import { getFavoriteNannys } from "../../redux/favorite/operationsFavorite";
import FilterNannys from "../../components/FilterNannys/FilterNannys";

const NanniesPage: FC = () => {
  const dispatch = useAppDispatch();
  const { isAuthUser, user } = useAuthUser();

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

export default NanniesPage;
