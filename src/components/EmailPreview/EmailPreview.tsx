import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import '../Sidebar/Sidebar.css';

interface EmailPreviewProps {
  read: boolean;
  receivedAt: string;
  subject: string;
  sender: string;
}

export const EmailPreview = ({ read, receivedAt, subject, sender }: EmailPreviewProps) => {
  dayjs.extend(relativeTime);
  const timeRecord = dayjs().to(dayjs('1990-01-01'));
  // don't forget `active` class
  return (
    <a href="#" className="list-group-item list-group-item-action py-3 lh-sm">
      <div className="d-flex w-100 align-items-center justify-content-between">
        <strong className="mb-1">{subject + 'superlong text that is very LOOONG'}</strong>
        <small className="text-muted">{timeRecord}</small>
      </div>
      <div className="col-10 mb-1 small">{sender}</div>
    </a>
  );
};

export default EmailPreview;
