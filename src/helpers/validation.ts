import * as yup from "yup";

const emailRegexp = /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

const phoneRegexp = /^\d{3}-\d{3}-\d{2}-\d{2}$/;

export const schemaSignUp = yup.object().shape({
  userName: yup
    .string()
    .required("Field is required")
    .min(3, "Minimum 3 characters")
    .max(64, "Maximum 64 characters"),
  userEmail: yup
    .string()
    .required("Field is required")
    .matches(emailRegexp, "Enter a correct email"),
  userPassword: yup
    .string()
    .required("Field is required")
    .min(8, "Minimum 8 characters")
    .max(64, "Maximum 64 characters"),
});

export const schemaSignIn = yup.object().shape({
  userEmail: yup
    .string()
    .required("Field is required")
    .matches(emailRegexp, "Enter a correct email"),
  userPassword: yup
    .string()
    .required("Field is required")
    .min(8, "Minimum 8 characters")
    .max(64, "Maximum 64 characters"),
});

export const schemaMakeForm = yup.object().shape({
  address: yup
    .string()
    .required("Field is required")
    .min(3, "Minimum 3 characters")
    .max(64, "Maximum 64 characters"),
  email: yup
    .string()
    .required("Field is required")
    .matches(emailRegexp, "Enter a correct email"),
  phoneNumber: yup
    .string()
    .required("Field is required")
    .matches(phoneRegexp, "Enter a correct phone"),
  meetingTime: yup.string().required("Field is required"),
  userComment: yup
    .string()
    .required("Field is required")
    .min(3, "Minimum 3 characters")
    .max(128, "Maximum 128 characters"),
  childAge: yup
    .string()
    .required("Field is required")
    .min(1, "Minimum 1 characters")
    .max(2, "Maximum 2 characters"),
  parentsName: yup
    .string()
    .required("Field is required")
    .min(3, "Minimum 3 characters")
    .max(64, "Maximum 64 characters"),
});
