import PaginationBar from '../PaginationBar/PaginationBar';
import EmailPreview from '../EmailPreview/EmailPreview';
import EmailPreviewModel from '../../models/emailPreviewModel';
import { listEmailsRequest } from '../../client/requests';
import { useEffect, useState } from 'react';
import { client } from '../../client/email-client';
import { useRecoilValue } from 'recoil';
import { currentMailboxState, currentPageState } from '../../recoil/atoms';
import ListEmailsModel from '../../models/listEmails';

const REFRESH_TIMER_MS = 10000;

export const EmailListBar = () => {
  const [emailPreviews, setEmailPreviews] = useState<ListEmailsModel>();
  const currentMailbox = useRecoilValue(currentMailboxState);
  const currentPage = useRecoilValue(currentPageState);
  const [previousCount, setPrevCount] = useState<number>();

  const getPreviews = (data: listEmailsRequest) => {
    client
      .listEmails(data)
      .then((res) => {
        if (currentPage - 1 == data.requested_page_number) {
          setEmailPreviews(res.data);
        }
      })
      .catch((err) => console.log(err));
  };

  const reqData = {
    mailbox_name: currentMailbox,
    requested_page_number: currentPage - 1, // On BE Indexing is from 0
    page_size: 4,
  };

  useEffect(() => getPreviews(reqData), [currentMailbox, currentPage]);
  useEffect(() => {
    const interval = setInterval(() => {
      getPreviews(reqData);
    }, REFRESH_TIMER_MS);
    console.log('Mounting');
    return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  }, []);

  useEffect(() => {
    if (previousCount && emailPreviews?.total_emails_count != previousCount && currentMailbox == 'INBOX') {
      client.sendNotifitcation({
        title: 'R-Mail',
        body: 'New email received',
      });
    }

    if (currentMailbox == 'INBOX') {
      setPrevCount(emailPreviews?.total_emails_count);
    }
  }, [emailPreviews]);

  return (
    <div
      className="d-flex flex-column justify-content-between align-items-stretch flex-shrink-1 bg-white"
      style={{ width: '340px' }}
    >
      <PaginationBar />

      <div className="d-flex list-group list-group-flush flex-column-reverse justify-content-end flex-grow-1 scrollarea">
        {emailPreviews?.emails.map((email: EmailPreviewModel) => (
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
