import { atom } from "recoil";
import EmailInput from "../models/emailInput";

export const inputFormState = atom<EmailInput>({
  key: 'inputFormState',
  default: {recipient: '', subject: '', body: ''},
});

export default inputFormState;
