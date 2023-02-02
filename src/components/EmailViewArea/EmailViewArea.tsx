import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { client } from '../../client/email-client';
import { currentEmailState } from '../../recoil/atoms';
import { emailDetailRequest } from '../../client/requests';
import emptyEmailDetail from '../../models/emptyEmailDetail';
import { useEffect, useState } from 'react';

export const EmailViewArea = () => {
  const currentEmail = useRecoilValue(currentEmailState);
  const [fetchedEmail, setFetchedEmail] = useState(emptyEmailDetail);

  const getEmail = (data: emailDetailRequest) => {
    console.log('tryng to fetch email:');
    console.log(data);
    client
      .getEmailInDetail(data)
      .then((res) => {
        setFetchedEmail(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => getEmail(currentEmail), [currentEmail]);

  return (
    <>
      <div className="flex-grow-1">
        <h1>From: {fetchedEmail.from_address}</h1>
        <h2>Subject: {fetchedEmail.subject}</h2>
        <hr />
        {fetchedEmail.body_text}
      </div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <button type="button" className="btn btn-outline-danger mx-2">
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
