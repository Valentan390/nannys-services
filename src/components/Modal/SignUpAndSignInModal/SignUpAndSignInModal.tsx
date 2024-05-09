import { FC } from "react";
import {
  StyledAuthModalButton,
  StyledAuthModalForm,
  StyledAuthModalText,
  StyledAuthModalTitle,
  StyledAuthModalWrapper,
} from "./SignUpAndSignInModal.styled";
import ButtonClose from "../../Button/ButtonClose/ButtonClose";
import InputAuth from "../../InputAuth/InputAuth";
import {
  inputSignInUsers,
  inputSignUPUsers,
} from "../../../helpers/componentsData";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaSignIn, schemaSignUp } from "../../../helpers/validation";
import { FormData } from "../../../helpers/interfeceData";
import { useAppDispatch } from "../../../hooks/useReduxHooks";
import { toast } from "react-toastify";
import {
  logInUserThunk,
  registerUserThunk,
} from "../../../redux/userAuth/operationsUserAuth";
import useModalHandler from "../../../hooks/useModalHandler";

interface SignUpAndSignInModalProps {
  typeModal: string;
}

const SignUpAndSignInModal: FC<SignUpAndSignInModalProps> = ({ typeModal }) => {
  const inputAuthUsers =
    typeModal === "SignUp" ? inputSignUPUsers : inputSignInUsers;
  const schema = typeModal === "SignUp" ? schemaSignUp : schemaSignIn;
  const dispatch = useAppDispatch();
  const { handleCloseModal } = useModalHandler();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    mode: "onTouched",
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit(async (data) => {
    if (typeModal === "SignUp") {
      try {
        await dispatch(registerUserThunk(data));
        handleCloseModal();
        reset();
      } catch (error) {
        if (error instanceof Error) {
          toast.error(`${error.message}`);
        }
      }
    } else {
      try {
        await dispatch(logInUserThunk(data));
        handleCloseModal();
        reset();
      } catch (error) {
        if (error instanceof Error) {
          toast.error(`${error.message}`);
        }
      }
    }
  });
  return (
    <StyledAuthModalWrapper>
      <ButtonClose />
      <StyledAuthModalTitle>
        {typeModal === "SignUp" ? "Registration" : "Log In"}
      </StyledAuthModalTitle>
      <StyledAuthModalText>
        {typeModal === "SignUp"
          ? "Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information."
          : "Welcome back! Please enter your credentials to access your account and continue your babysitter search."}
      </StyledAuthModalText>

      <StyledAuthModalForm onSubmit={onSubmit}>
        {inputAuthUsers.map(({ name, placeholder }) => (
          <InputAuth
            key={name}
            name={name}
            placeholder={placeholder}
            register={register}
            errors={errors}
          />
        ))}
        <StyledAuthModalButton type="submit">
          {typeModal === "SignUp" ? "Sign Up" : "Log In"}
        </StyledAuthModalButton>
      </StyledAuthModalForm>
    </StyledAuthModalWrapper>
  );
};

export default SignUpAndSignInModal;
