import { RootState } from "../stor";

export const selectOpenModal = (state: RootState) => state.modal.openModal;

export const selectContentModal = (state: RootState) =>
  state.modal.contentModal;

export const selectNannyModal = (state: RootState) => state.modal.nannyModal;
