import { Link } from 'react-router-dom';

export const EmailViewArea = () => {
  return (
    <>
      <div className="flex-grow-1">
        <h1>From: {}</h1>
        <h2>Subject: {}</h2>
        <hr />
        {}
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
