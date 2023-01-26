import { Link } from 'react-router-dom';

export const MainSectionUpperBar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="d-flex container-fluid justify-content-end">
        <Link to="/compose">
          <button type="button" className="btn btn-outline-info mx-2">
            New Email
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default MainSectionUpperBar;
