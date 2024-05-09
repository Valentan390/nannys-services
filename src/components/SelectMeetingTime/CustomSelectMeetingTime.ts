import { StylesConfig } from "react-select";
import { ISelectOption } from "../../helpers/interfeceData";

export const customMeetingTime = (
  $error: boolean
): StylesConfig<ISelectOption, false> => ({
  container: (provided) => ({
    ...provided,
    width: "100%",
    padding: "0",
  }),

  control: (provided) => ({
    ...provided,
    borderRadius: "12px",
    border: `1px solid ${$error ? "var(--red)" : "rgba(17, 16, 28, 0.1)"}`,
    background: "var(--lightGrey)",
    color: "var(--navyBlue)",
    fontSize: "18px",
    fontWeight: "var(--medium)",
    lineHeight: "1.11",
    transition: "var(--transition)",

    input: {
      display: "none",
    },

    svg: {
      color: `${$error ? "var(--red)" : "var(--navyBlue)"}`,
      width: "20px",
      height: "20px",
      stroke: `${$error ? "var(--red)" : "var(--navyBlue)"}`,
      fill: "none",
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
    width: "168px",
    right: "0",
    borderRadius: "14px",
    background: "var(--grey)",
    boxShadow: "0px 20px 69px 0px rgba(0, 0, 0, 0.3)",
    display: "block",
  }),

  menuList: (provided) => ({
    ...provided,
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    margin: "14px 16px",
  }),

  option: (provided, state) => ({
    ...provided,
    backgroundColor: "none",
    color: state.isSelected ? "var(--navyBlue)" : "rgba(17, 16, 28, 0.30)",
    fontFamily: "Roboto",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "1.25",
    textAlign: "center",
    padding: "0",

    "&:hover": {
      color: "var(--navyBlue)",
    },

    ...(state.isDisabled && {
      pointerEvents: "none",
    }),

    ...(state.data &&
      state.data.value === "meeting_time_header" && {
        fontFamily: "Roboto",
        color: "var(--navyBlue)",
        fontSize: "16px",
        fontWeight: "var(--bold)",
        lineHeight: "1.5",
        textAlign: "left",
        paddingBottom: "8px",
      }),
  }),

  placeholder: (provided) => ({
    ...provided,
    color: `${$error ? "var(--red)" : "var(--navyBlue)"}`,
    marginLeft: "18px",
    fontSize: "16px",
    fontWeight: "var(--regular)",
    lineHeight: "1.25",
  }),

  singleValue: (provided) => ({
    ...provided,
    color: "var(--navyBlue)",
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
});
