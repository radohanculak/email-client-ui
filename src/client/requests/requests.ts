/* eslint-disable @typescript-eslint/naming-convention */
export interface signInRequest {
  email: string;
  password: string;
  domain: string;
}

export interface listEmailsRequest {
  requested_page_number: number;
  page_size: number;
  mailbox_name: string;
}

export interface deleteEmailRequest {
  mailbox_name: string;
  sequence_set_top: number;
  sequence_set_bottom: number;
}

export interface emailDetailRequest {
  mailbox_name: string;
  sequence_number: number;
}

export interface sendEmailRequest {
  to_address: string;
  subject: string;
  body: string;
  stuff: FileList;
}

export interface downloadAttachmentRequest {
  mailbox_name: string;
  sequence_number: number;
  attachment_name: string;
}

export interface sendNotificationRequest {
  title: string;
  body: string;
}
