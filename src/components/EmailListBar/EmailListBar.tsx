import PaginationBar from '../PaginationBar/PaginationBar';
import EmailPreview from '../EmailPreview/EmailPreview';
import EmailPreviewModel from '../../models/emailPreviewModel';
import { listEmailsRequest } from '../../client/requests';
import { useEffect, useState } from 'react';
import { client } from '../../client/email-client';
import { useRecoilState, useRecoilValue } from 'recoil';
import { currentMailboxState, currentPageState } from '../../recoil/atoms';

export const EmailListBar = () => {
  const [emailPreviews, setEmailPreviews] = useState([]);
  const currentMailbox = useRecoilValue(currentMailboxState);
  const currentPage = useRecoilValue(currentPageState);

  const getPreviews = (data: listEmailsRequest) => {
    client
      .listEmails(data)
      .then((res) => {
        setEmailPreviews(res.data.emails);
      })
      .catch((err) => console.log(err));
  };

  const reqData = {
    mailbox_name: currentMailbox,
    requested_page_number: currentPage,
    page_size: 4,
  };

  useEffect(() => getPreviews(reqData), [currentMailbox, currentPage]);

  return (
    <div
      className="d-flex flex-column justify-content-between align-items-stretch flex-shrink-1 bg-white"
      style={{ width: '340px' }}
    >
      <PaginationBar />

      <div className="d-flex list-group list-group-flush flex-column-reverse justify-content-end flex-grow-1 scrollarea">
        {emailPreviews.map((email: EmailPreviewModel) => (
          <EmailPreview
            key={email.subject + email.send_date}
            seq={email.sequence_number}
            read={email.was_read}
            sender={email.from_address}
            receivedAt={email.send_date}
            subject={email.subject}
          />
        ))}
      </div>

      <nav className="navbar navbar-dark bg-dark" style={{ height: '54px' }} />
    </div>
  );
};

export default EmailListBar;
