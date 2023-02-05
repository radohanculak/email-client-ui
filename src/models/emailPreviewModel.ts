export interface EmailPreviewModel {
  sequence_number: number;
  from_address: string;
  subject: string;
  was_read: boolean;
  send_date: string;
}

export default EmailPreviewModel;
