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
  const [previousMailbox, setPrevMailbox] = useState<string>();
  const [fetchTrigger, setFetchTrigger] = useState<boolean>(false);

  const getPreviews = (data: listEmailsRequest) => {
    client
      .listEmails(data)
      .then((res) => {
        if (currentPage - 1 == data.requested_page_number && currentMailbox == res.data.mailbox_name) {
          setEmailPreviews(res.data);
        }
      })
      .catch((err) => console.log(err));
  };

  const reqData = {
    mailbox_name: currentMailbox,
    requested_page_number: currentPage - 1, // On BE Indexing is from 0
    page_size: 10,
  };

  useEffect(() => getPreviews(reqData), [currentMailbox, currentPage, fetchTrigger]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFetchTrigger((fetchTrigger) => !fetchTrigger);
    }, REFRESH_TIMER_MS);
    return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  }, []);

  useEffect(() => {
    if (
      previousCount &&
      previousMailbox &&
      emailPreviews?.total_emails_count != previousCount &&
      currentMailbox == previousMailbox
    ) {
      client.sendNotifitcation({
        title: 'R-Mail',
        body: 'New email detected in ' + currentMailbox,
      });
    }

    setPrevCount(emailPreviews?.total_emails_count);
    setPrevMailbox(emailPreviews?.mailbox_name);
  }, [emailPreviews]);

  const maxPage = Math.ceil((emailPreviews?.total_emails_count ?? 1) / reqData.page_size);
  return (
    <div
      className="d-flex flex-column justify-content-between align-items-stretch flex-shrink-1 bg-white"
      style={{ width: '340px' }}
    >
      <nav className="navbar flex-shrink-0 navbar-dark bg-dark" style={{ height: '54px' }} />

      <div className="d-flex list-group list-group-flush flex-grow-1 scrollarea">
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
      <PaginationBar maxPage={maxPage} />
    </div>
  );
};

export default EmailListBar;
