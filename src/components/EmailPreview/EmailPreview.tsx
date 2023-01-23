import '../Sidebar/Sidebar.css';

interface EmailPreviewProps {
  receivedAt: string;
  subject: string;
  text: string;
}

export const EmailPreview = ({ receivedAt, subject, text }: EmailPreviewProps) => {
  // don't forget `active` class
  return (
    <a href="#" className="list-group-item list-group-item-action py-3 lh-sm">
      <div className="d-flex w-100 align-items-center justify-content-between">
        <strong className="mb-1">{subject}</strong>
        <small className="text-muted">{receivedAt}</small>
      </div>
      <div className="col-10 mb-1 small">{text}</div>
    </a>
  );
};

export default EmailPreview;
