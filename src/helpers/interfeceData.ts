import { FieldErrors, UseFormRegister } from "react-hook-form";

export interface FormData {
  userName?: string;
  userEmail: string;
  userPassword: string;
}

export type AuthInputName = "userName" | "userEmail" | "userPassword";

export type FormInputName =
  | "address"
  | "email"
  | "phoneNumber"
  | "userComment"
  | "childAge"
  | "parentsName"
  | "meetingTime";

export interface InputAuthProps {
  name: AuthInputName;
  placeholder: string;
  register: UseFormRegister<FormData>;
  errors: FieldErrors;
}

export interface InputAuthUsers {
  name: AuthInputName;
  placeholder: string;
}

export interface User {
  userName: string;
  userEmail: string;
  id: string;
}

export interface InitialState {
  user: User;
  idToken: string;
  isAuthUser: boolean;
  isLoadingUser: boolean;
  error: string | undefined;
}

export interface UserLogin {
  kind: string;
  localId: string;
  email: string;
  displayName: string;
  idToken: string;
  registered: boolean;
  refreshToken: string;
  expiresIn: string;
}

export interface UserData {
  email: string;
  displayName: string;
  localId: string;
}

export interface Review {
  comment: string;
  rating: number;
  reviewer: string;
}

export interface Nanny {
  about: string;
  avatar_url: string;
  birthday: string;
  characters: string[];
  education: string;
  experience: string;
  kids_age: string;
  location: string;
  name: string;
  price_per_hour: number;
  rating: number;
  reviews: Review[];
}

export interface ISelectOption {
  value: string;
  label: string;
}

export interface FormDataMake {
  address: string;
  email: string;
  phoneNumber: string;
  userComment: string;
  childAge: string;
  parentsName: string;
  meetingTime: string;
}

export interface FormInputProps {
  name: FormInputName;
  placeholder: string;
  id: string;
  $width?: boolean;
  register: UseFormRegister<FormDataMake>;
  errors: FieldErrors;
}
