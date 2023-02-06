import { Link, useNavigate, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { client } from '../../client/email-client';
import { currentEmailState } from '../../recoil/atoms';
import { deleteEmailRequest, emailDetailRequest } from '../../client/requests';
import emptyEmailDetail from '../../models/emptyEmailDetail';
import { useEffect, useState } from 'react';
import fileDownload from 'js-file-download';

export const EmailViewArea = () => {
  const currentEmail = useRecoilValue(currentEmailState);
  const navigate = useNavigate();

  const { id } = useParams();
  useEffect(() => {
    if (id != String(currentEmail.sequence_number)) {
      navigate('/');
    }
  }, [id]);

  const [fetchedEmail, setFetchedEmail] = useState(emptyEmailDetail);

  const deleteEmail = (data: deleteEmailRequest) => {
    client
      .deleteEmail(data)
      .then()
      .catch((err) => console.log(err));
  };

  const getEmail = (data: emailDetailRequest) => {
    console.log('tryng to fetch email:');
    console.log(data);
    client
      .getEmailInDetail(data)
      .then((res) => {
        setFetchedEmail(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  const downloadAttachments = () => {
    console.log('download attachments');
    fetchedEmail.attachments.map((a: any) => {
      client
        .downloadAttachment({
          mailbox_name: currentEmail.mailbox_name,
          sequence_number: currentEmail.sequence_number,
          attachment_name: a.file_name,
        })
        .then((res: any) => fileDownload(res.data, a.file_name));
    });
  };

  useEffect(() => getEmail(currentEmail), [currentEmail]);

  return (
    <>
      <div className="input-group px-3 py-2">
        <span className="input-group-text" id="basic-addon1">
          From:
        </span>
        <input type="email" value={fetchedEmail.from_address} className="form-control" readOnly={true} />
      </div>
      <div className="input-group px-3 py-2">
        <span className="input-group-text" id="basic-addon1">
          Subject:
        </span>
        <input type="text" value={fetchedEmail.subject} className="form-control" readOnly={true} />
      </div>
      <div className="container-fluid flex-grow-1 pt-2 pb-4">
        <div className="input-group h-100">
          <textarea className="form-control" value={fetchedEmail.body_text} readOnly={true} />
        </div>
      </div>
      <div className="container-fluid">
        Attachments:
        <div className="input-group h-50">
          <textarea
            className="form-control"
            value={fetchedEmail.attachments.map((a: any) => a.file_name)}
            readOnly={true}
          />
          <button type="button" className="btn btn-primary" onClick={downloadAttachments}>
            Download
          </button>
        </div>
      </div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <button
            type="button"
            onClick={() =>
              deleteEmail({
                mailbox_name: currentEmail.mailbox_name,
                sequence_set_top: currentEmail.sequence_number,
                sequence_set_bottom: currentEmail.sequence_number,
              })
            }
            className="btn btn-outline-danger mx-2"
          >
            Delete
          </button>

          <Link to="/compose">
            <button type="button" className="btn btn-outline-light mx-2">
              Reply
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default EmailViewArea;
