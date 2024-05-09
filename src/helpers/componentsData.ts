import { Variants } from "framer-motion";
import { FormInputName, ISelectOption, InputAuthUsers } from "./interfeceData";

export const navigationNotAuthUser = [
  {
    to: "/",
    text: "Home",
  },
  {
    to: "/nannies",
    text: "Nannies",
  },
];

export const navigationsAuthUser = [
  {
    to: "/",
    text: "Home",
  },
  {
    to: "/nannies",
    text: "Nannies",
  },
  {
    to: "/favorites",
    text: "Favorites",
  },
];

export const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0,
      duration: 0.8,
    },
  },
  exit: {
    opacity: 0,
    transition: { delay: 0, duration: 0.8 },
  },
};

export const inputSignUPUsers: InputAuthUsers[] = [
  {
    name: "userName",
    placeholder: "Name",
  },
  {
    name: "userEmail",
    placeholder: "Email",
  },
  {
    name: "userPassword",
    placeholder: "Password",
  },
];

export const inputSignInUsers: InputAuthUsers[] = [
  {
    name: "userEmail",
    placeholder: "Email",
  },
  {
    name: "userPassword",
    placeholder: "Password",
  },
];

export const options: ISelectOption[] = [
  { value: "A to Z", label: "A to Z" },
  { value: "Z to A", label: "Z to A" },
  { value: "Less than 10$", label: "Less than 10$" },
  { value: "Greater than 10$", label: "Greater than 10$" },
  { value: "Popular", label: "Popular" },
  { value: "Not popular", label: "Not popular" },
  { value: "Show all", label: "Show all" },
];

interface IFormAddresInput {
  name: FormInputName;
  placeholder: string;
  id: string;
  $width?: boolean;
}

export const formAddresInput: IFormAddresInput[] = [
  {
    name: "address",
    placeholder: "Address",
    id: "addressInput",
    $width: true,
  },
  {
    name: "phoneNumber",
    placeholder: "+380",
    id: "phoneNumberInput",
    $width: true,
  },
  {
    name: "childAge",
    placeholder: "Child's age",
    id: "childAge",
    $width: true,
  },
];

export const formEmailInput: IFormAddresInput[] = [
  { name: "email", placeholder: "Email", id: "emailInput" },
  {
    name: "parentsName",
    placeholder: "Father's or mother's name",
    id: "parentsNameInput",
  },
];

export const selectFormOptions = [
  { label: "Meeting time", value: "meeting_time_header", isDisabled: true },
  { value: "9 : 00", label: "9 : 00" },
  { value: "9 : 30", label: "9 : 30" },
  { value: "10 : 00", label: "10 : 00" },
  { value: "10 : 30", label: "10 : 30" },
  { value: "11 : 00", label: "11 : 00" },
  { value: "11 : 30", label: "11 : 30" },
];
