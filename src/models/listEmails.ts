import EmailPreviewModel from './emailPreviewModel';

export interface ListEmailsModel {
  mailbox_name: string;
  total_emails_count: number;
  requested_page_number: string;
  emails: EmailPreviewModel[];
}

export default ListEmailsModel;
