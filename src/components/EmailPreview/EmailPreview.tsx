import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
// import { Link } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { currentEmailState, currentMailboxState } from '../../recoil/atoms';

import '../Sidebar/Sidebar.css';

interface EmailPreviewProps {
  seq: number;
  read: boolean;
  receivedAt: string;
  subject: string;
  sender: string;
}

export const EmailPreview = ({ seq, read, receivedAt, subject, sender }: EmailPreviewProps) => {
  const currentMailbox = useRecoilValue(currentMailboxState);
  const setCurrentEmailState = useSetRecoilState(currentEmailState);
  dayjs.extend(relativeTime);
  const timeRecord = dayjs().to(dayjs(receivedAt));
  // don't forget `active` class
  return (
    // <Link to={`email/${currentMailbox}/${seq}`}>
    <a
      href="#"
      onClick={() => {
        console.log(`seq: ${seq}`);
        setCurrentEmailState({ mailbox_name: currentMailbox, sequence_number: seq });
      }}
      className={`list-group-item list-group-item-action list-group-item py-3 lh-sm`}
    >
      <div className="d-flex w-100 align-items-center justify-content-between">
        {read ? <div className="mb-1">{subject}</div> : <strong className="mb-1">{subject}</strong>}
        <small className="text-muted">{timeRecord}</small>
      </div>
      <div className="col-10 mb-1 small">{sender}</div>
    </a>
    // </Link>
  );
};

export default EmailPreview;
