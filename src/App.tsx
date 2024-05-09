import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import ModalContainer from "./components/ModalContainer/ModalContainer";
import ModalContent from "./components/ModalContent/ModalContent";
import { useAppDispatch, useAppSelector } from "./hooks/useReduxHooks";
import { Suspense, lazy, useEffect } from "react";
import { getUserDataThunk } from "./redux/userAuth/operationsUserAuth";
import useAuthUser from "./hooks/useAuthUser";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getNannysThunk } from "./redux/nannys/operationsNannys";
import { selectCarrentPage } from "./redux/nannys/nannysSelectors";
import LoaderHourglass from "./components/LoaderHourglass/LoaderHourglass";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const NanniesPage = lazy(() => import("./pages/NanniesPage/NanniesPage"));
const FavoritesPage = lazy(() => import("./pages/FavoritesPage/FavoritesPage"));

const App = () => {
  const dispatch = useAppDispatch();
  const { idToken } = useAuthUser();
  const carretPage = useAppSelector(selectCarrentPage);

  useEffect(() => {
    if (idToken) {
      dispatch(getUserDataThunk({ idToken }));
    }
  }, [dispatch, idToken]);

  useEffect(() => {
    dispatch(getNannysThunk(carretPage));
  }, [dispatch, carretPage]);

  return (
    <>
      <Suspense fallback={<LoaderHourglass />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/nannies" element={<NanniesPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
          </Route>
        </Routes>
      </Suspense>

      <ModalContainer>
        <ModalContent />
      </ModalContainer>

      <ToastContainer position="top-center" autoClose={5000} />
    </>
  );
};

export default App;
