import PaginationBar from '../PaginationBar/PaginationBar';
import EmailPreview from '../EmailPreview/EmailPreview';
import EmailPreviewModel from '../../models/emailPreviewModel';
import { listEmailsRequest } from '../../client/requests';
import { useState } from 'react';
import { client } from '../../client/email-client';
import { useRecoilState, useRecoilValue } from 'recoil';
import { currentMailboxState, currentPageState } from '../../recoil/atoms';

import listEmails from '../../mock_data/listEmails';

export const EmailListBar = () => {
  const [emailPreviews, setEmailPreviews] = useState([]);
  const currentMailbox = useRecoilValue(currentMailboxState);
  const currentPage = useRecoilValue(currentPageState);

  const getPreviews = (data: listEmailsRequest) => {
    client
      .listEmails(data)
      .then((res) => {
        console.log(res);
        setEmailPreviews(res.data.emails);
      })
      .catch();
  };

  const reqData = {
    mailbox_name: currentMailbox,
    requested_page_number: currentPage,
    page_size: 5,
  };

  getPreviews(reqData);

  return (
    <div className="d-flex flex-column align-items-stretch flex-shrink-1 bg-white" style={{ width: '380px' }}>
      <PaginationBar />

      <div className="d-flex list-group list-group-flush flex-column-reverse border-bottom scrollarea">
        {listEmails.emails.map((email: EmailPreviewModel) => (
          <EmailPreview
            read={email.was_read}
            sender={email.from_address}
            receivedAt={email.send_date}
            subject={email.subject}
          />
        ))}
      </div>
    </div>
  );
};

export default EmailListBar;
