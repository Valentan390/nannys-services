import { useAppSelector } from "./useReduxHooks";
import {
  selectError,
  selectIdToken,
  selectIsAuthUser,
  selectIsLoadingUser,
  selectUser,
} from "../redux/userAuth/userAuthSelectors";

const useAuthUser = () => {
  const user = useAppSelector(selectUser);
  const idToken = useAppSelector(selectIdToken);
  const isAuthUser = useAppSelector(selectIsAuthUser);
  const isLoadingUser = useAppSelector(selectIsLoadingUser);
  const error = useAppSelector(selectError);
  return { user, idToken, isAuthUser, isLoadingUser, error };
};

export default useAuthUser;
