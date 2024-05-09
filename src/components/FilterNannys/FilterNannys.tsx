import { FC } from "react";
import { useLocation } from "react-router-dom";
import Select, { SingleValue } from "react-select";
import { useAppDispatch, useAppSelector } from "../../hooks/useReduxHooks";
import { ISelectOption } from "../../helpers/interfeceData";
import { options } from "../../helpers/componentsData";
import {
  selectSelectFavoriteFilter,
  selectSelectFilter,
} from "../../redux/filter/filterSelectors";
import {
  setFavoriteFilterNanny,
  setFilterNanny,
} from "../../redux/filter/filterSlice";
import { customStyles } from "./SelectCustomStyles";
import { StyledFilterNannysTitle } from "./FilterNannys.styled";

const FilterNannys: FC = () => {
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();
  const filter =
    pathname === "/nannies" ? selectSelectFilter : selectSelectFavoriteFilter;
  const selectFilter = useAppSelector(filter);

  const handleChange = (select: SingleValue<ISelectOption>) => {
    if (select) {
      const action =
        pathname === "/nannies" ? setFilterNanny : setFavoriteFilterNanny;
      dispatch(action(select));
    }
  };

  return (
    <>
      <StyledFilterNannysTitle>Filters</StyledFilterNannysTitle>
      <Select
        styles={customStyles}
        options={options}
        value={selectFilter}
        onChange={handleChange}
      />
    </>
  );
};

export default FilterNannys;
