import { StylesConfig } from "react-select";
import { ISelectOption } from "../../helpers/interfeceData";

export const customStyles: StylesConfig<ISelectOption, false> = {
  container: (provided) => ({
    ...provided,
    width: "226px",
    padding: "0",
    marginBottom: "33px",
  }),

  control: (provided) => ({
    ...provided,
    borderRadius: "14px",
    background: "var(--red)",
    color: "var(--lightGrey)",
    fontSize: "18px",
    fontWeight: "var(--medium)",
    lineHeight: "1.11",
    transition: "var(--transition)",

    input: {
      display: "none",
    },

    svg: {
      color: "var(--lightGrey)",
      width: "20px",
      height: "20px",
    },

    "&:hover": {
      boxShadow: "0px 3px 10px 0px rgba(0, 0, 0, 0.3)",
    },
  }),

  input: (provided) => ({
    ...provided,
    padding: "16px 18px",
  }),

  valueContainer: (provided) => ({
    ...provided,
    padding: "0",
  }),

  menu: (provided) => ({
    ...provided,
    borderRadius: "14px",
    background: "var(--grey)",
    boxShadow: "0px 20px 69px 0px rgba(0, 0, 0, 0.3)",
    display: "flex",
    gap: "12px",
  }),

  menuList: (provided) => ({
    ...provided,
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    margin: "14px 18px",
  }),

  option: (provided, state) => ({
    ...provided,
    backgroundColor: "none",
    color: state.isSelected ? "var(--navyBlue)" : "rgba(17, 16, 28, 0.30)",
    fontFamily: "Roboto",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "1.11",
    padding: "0",

    "&:hover": {
      color: "var(--navyBlue)",
    },
  }),

  placeholder: (provided) => ({
    ...provided,
    color: "var(--navyBlue)",
    marginLeft: "18px",
  }),

  singleValue: (provided) => ({
    ...provided,
    color: "var(--lightGrey)",
    fontSize: "18px",
    fontWeight: "var(--medium)",
    lineHeight: "1.11",
    marginLeft: "18px",
  }),

  dropdownIndicator: (provided, state) => ({
    ...provided,
    transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : "rotate(0deg)",
  }),

  indicatorSeparator: (provided) => ({
    ...provided,
    display: "none",
  }),
};
