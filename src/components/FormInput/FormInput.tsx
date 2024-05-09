import { FC } from "react";
import {
  StyledFormError,
  StyledFormInput,
  StyledFormInputLabel,
} from "./FormInput.styled";
import { FormInputProps } from "../../helpers/interfeceData";

const FormInput: FC<FormInputProps> = ({
  id,
  name,
  placeholder,
  $width,
  register,
  errors,
}) => {
  return (
    <>
      <StyledFormInputLabel htmlFor={id} $width={$width}>
        <StyledFormInput
          type={name === "email" ? "email" : "text"}
          id={id}
          placeholder={placeholder}
          {...register(name)}
          $error={!!errors[name]}
          autoComplete="on"
        />
        <StyledFormError>{`${errors[name]?.message || ""}`}</StyledFormError>
      </StyledFormInputLabel>
    </>
  );
};

export default FormInput;
