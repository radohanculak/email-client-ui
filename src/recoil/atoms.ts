import { atom } from 'recoil';
import { emailDetailRequest } from '../client/requests';
import EmailInput from '../models/emailInput';

export const inputFormState = atom<EmailInput>({
  key: 'inputFormState',
  default: { recipient: '', subject: '', body: '' },
});

export const currentMailboxState = atom<string>({
  key: 'currentMailboxState',
  default: 'INBOX',
});

export const isLoggedInState = atom<boolean>({
  key: 'isLoggedInState',
  default: false,
});

export const currentPageState = atom<number>({
  key: 'currentPageState',
  default: 1,
});

export const currentEmailState = atom<emailDetailRequest>({
  key: 'currentEmailState',
  default: { mailbox_name: 'INBOX', sequence_number: 1 },
});

export default { inputFormState, currentMailboxState, isLoggedInState, currentPageState };
