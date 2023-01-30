import { atom } from "recoil";
import EmailInput from "../models/emailInput";

export const inputFormState = atom<EmailInput>({
  key: 'inputFormState',
  default: {recipient: '', subject: '', body: ''},
});

export const currentMailboxState = atom<string>({
  key: 'currentMailboxState',
  default: 'INBOX'
})

export const isLoggedInState = atom<boolean>({
  key: 'isLoggedInState',
  default: false
})

export default { inputFormState, currentMailboxState, isLoggedInState };
