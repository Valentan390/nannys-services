import { FC } from "react";
import ButtonClose from "../../Button/ButtonClose/ButtonClose";
import useModalHandler from "../../../hooks/useModalHandler";
import {
  StyledMakeModalButton,
  StyledMakeModalContainer,
  StyledMakeModalForm,
  StyledMakeModalFoto,
  StyledMakeModalP,
  StyledMakeModalText,
  StyledMakeModalTextarea,
  StyledMakeModalTitle,
  StyledMakeModalWrapper,
} from "./MakeAnAppointmentModal.styled";
import FormInput from "../../FormInput/FormInput";
import {
  StyledFormError,
  StyledFormInputLabel,
} from "../../FormInput/FormInput.styled";
import {
  formAddresInput,
  formEmailInput,
} from "../../../helpers/componentsData";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaMakeForm } from "../../../helpers/validation";
import SelectMeetingTime from "../../SelectMeetingTime/SelectMeetingTime";
import { FormDataMake } from "../../../helpers/interfeceData";
import { toast } from "react-toastify";

const MakeAnAppointmentModal: FC = () => {
  const { nannyModal } = useModalHandler();
  const { handleCloseModal } = useModalHandler();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<FormDataMake>({
    mode: "onTouched",
    resolver: yupResolver(schemaMakeForm),
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      await alert(`Hello ${data.parentsName}. Please check your details.
      Address: ${data.address}
      Number Tel: ${data.phoneNumber}
      Child's age: ${data.childAge}
      Meeting time: ${data.meetingTime}
      Email: ${data.email}
      Father's or mother's name: ${data.parentsName}
      Comment: ${data.userComment}
      `);
      await reset();
      await handleCloseModal();
      await toast.success("Data sent successfully.");
    } catch (error) {
      if (error instanceof Error) {
        toast.error(`${error.message}`);
      }
    }
  });
  return (
    <StyledMakeModalWrapper>
      <ButtonClose />
      <StyledMakeModalTitle>
        Make an appointment with a babysitter
      </StyledMakeModalTitle>
      <StyledMakeModalText>
        Arranging a meeting with a caregiver for your child is the first step to
        creating a safe and comfortable environment. Fill out the form below so
        we can match you with the perfect care partner.
      </StyledMakeModalText>
      <StyledMakeModalContainer>
        <StyledMakeModalFoto
          src={nannyModal.avatar_url}
          alt={nannyModal.name}
        />
        <StyledMakeModalContainer $flexDirection={true}>
          <StyledMakeModalP $grey={true}>Your nanny</StyledMakeModalP>
          <StyledMakeModalP>{nannyModal.name}</StyledMakeModalP>
        </StyledMakeModalContainer>
      </StyledMakeModalContainer>

      <StyledMakeModalForm action="" onSubmit={onSubmit}>
        {formAddresInput.map(({ id, name, placeholder, $width }) => (
          <FormInput
            key={name}
            id={id}
            name={name}
            placeholder={placeholder}
            $width={$width}
            register={register}
            errors={errors}
          />
        ))}

        <Controller
          name="meetingTime"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <StyledFormInputLabel $width={true}>
              <SelectMeetingTime {...field} $error={!!errors.meetingTime} />
              <StyledFormError>{errors.meetingTime?.message}</StyledFormError>
            </StyledFormInputLabel>
          )}
        />

        {formEmailInput.map(({ id, name, placeholder }) => (
          <FormInput
            key={name}
            id={id}
            name={name}
            placeholder={placeholder}
            register={register}
            errors={errors}
          />
        ))}

        <StyledFormInputLabel htmlFor="comment">
          <StyledMakeModalTextarea
            id="comment"
            placeholder="Comment"
            {...register("userComment")}
            $error={!!errors.userComment}
          ></StyledMakeModalTextarea>
          <StyledFormError>{errors.userComment?.message}</StyledFormError>
        </StyledFormInputLabel>

        <StyledMakeModalButton type="submit">Send</StyledMakeModalButton>
      </StyledMakeModalForm>
    </StyledMakeModalWrapper>
  );
};

export default MakeAnAppointmentModal;
