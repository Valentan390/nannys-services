import { createSlice } from "@reduxjs/toolkit";
import { Nanny } from "../../helpers/interfeceData";

interface InitialState {
  openModal: boolean;
  contentModal: string;
  nannyModal: Nanny;
}

const initialState: InitialState = {
  openModal: false,
  contentModal: "",
  nannyModal: {
    about: "",
    avatar_url: "",
    birthday: "",
    characters: [],
    education: "",
    experience: "",
    kids_age: "",
    location: "",
    name: "",
    price_per_hour: 0,
    rating: 0,
    reviews: [],
  },
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setOpenModal: (state, action) => {
      state.openModal = action.payload;
    },
    setContentModal: (state, action) => {
      state.contentModal = action.payload;
    },
    setNannyModal: (state, action) => {
      state.nannyModal = action.payload;
    },
  },
});

export const { setContentModal, setOpenModal, setNannyModal } =
  modalSlice.actions;
export const modalReduser = modalSlice.reducer;
