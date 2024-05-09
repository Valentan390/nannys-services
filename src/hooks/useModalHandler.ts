import { useAppDispatch, useAppSelector } from "./useReduxHooks";
import {
  selectContentModal,
  selectNannyModal,
  selectOpenModal,
} from "../redux/madal/modalSelectors";
import {
  setContentModal,
  setNannyModal,
  setOpenModal,
} from "../redux/madal/madalSlise";
import { Nanny } from "../helpers/interfeceData";

const useModalHandler = () => {
  const openModal = useAppSelector(selectOpenModal);
  const contentModal = useAppSelector(selectContentModal);
  const nannyModal = useAppSelector(selectNannyModal);
  const dispatch = useAppDispatch();

  const handleCloseModal = () => {
    dispatch(setOpenModal(false));
    dispatch(setContentModal(""));
  };

  const handleOpenModal = (modalContent: string, nanny?: Nanny) => {
    dispatch(setOpenModal(true));
    dispatch(setContentModal(modalContent));
    if (nanny) {
      dispatch(setNannyModal(nanny));
    }
  };

  return {
    openModal,
    contentModal,
    handleCloseModal,
    handleOpenModal,
    nannyModal,
  };
};

export default useModalHandler;
