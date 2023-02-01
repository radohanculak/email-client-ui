import { atom } from "recoil";
import DisplayedEmail from "../models/displayedEmail";
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

export const currentPageState = atom<number>({
  key: 'currentPageState',
  default: 1
})

export const currentEmailState = atom<DisplayedEmail>({
  key: 'currentEmailState',
  default: {mailbox: 'INBOX', seq: 0}
})

export default { inputFormState, currentMailboxState, isLoggedInState, currentPageState };
