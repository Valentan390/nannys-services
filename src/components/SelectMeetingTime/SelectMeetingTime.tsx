import { FC } from "react";
import Select, { SingleValue, components } from "react-select";
import { selectFormOptions } from "../../helpers/componentsData";
import { customMeetingTime } from "./CustomSelectMeetingTime";
import { ISelectOption } from "../../helpers/interfeceData";
import Icon from "../Icon/Icon";

interface SelectMeetingTimeProps {
  onChange: (value: string) => void;
  $error: boolean;
}
const { DropdownIndicator } = components;

const CustomDropdownIndicator: FC<any> = (props) => {
  return (
    <DropdownIndicator {...props}>
      <Icon
        iconName="icon-clock"
        width="20"
        height="20"
        // fill="none"
        // stroke="var(--navyBlue)"
      />
    </DropdownIndicator>
  );
};
const SelectMeetingTime: FC<SelectMeetingTimeProps> = ({
  onChange,
  $error,
}) => {
  const handleChange = (selectedOption: SingleValue<ISelectOption>) => {
    if (selectedOption !== null) {
      onChange(selectedOption.value);
    }
  };

  return (
    <>
      <Select
        options={selectFormOptions}
        styles={customMeetingTime($error)}
        placeholder="00:00"
        onChange={handleChange}
        components={{
          DropdownIndicator: CustomDropdownIndicator,
        }}
      />
    </>
  );
};

export default SelectMeetingTime;
