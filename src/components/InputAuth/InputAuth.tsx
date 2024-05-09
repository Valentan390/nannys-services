import { FC, useState } from "react";
import ButtonEye from "../Button/ButtonEye/ButtonEye";
import {
  StyledInputAuthError,
  StyledInputAuthInput,
  StyledInputAuthLabel,
} from "./InputAuth.styled";
import { InputAuthProps } from "../../helpers/interfeceData";

const InputAuth: FC<InputAuthProps> = ({
  name,
  placeholder,
  register,
  errors,
}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const getInputType = () => {
    if (name === "userPassword") {
      return passwordVisible ? "text" : "password";
    } else {
      return name === "userEmail" ? "email" : "text";
    }
  };
  return (
    <StyledInputAuthLabel>
      <StyledInputAuthInput
        type={getInputType()}
        placeholder={placeholder}
        {...register(name)}
        autoComplete={name === "userPassword" ? "off" : "on"}
        $error={!!errors[name]}
      />

      <StyledInputAuthError>{`${
        errors[name]?.message || ""
      }`}</StyledInputAuthError>

      {name === "userPassword" && (
        <ButtonEye
          passwordVisible={passwordVisible}
          togglePasswordVisibility={togglePasswordVisibility}
        />
      )}
    </StyledInputAuthLabel>
  );
};

export default InputAuth;
