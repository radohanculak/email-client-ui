import { Routes, Route } from 'react-router-dom';

export const MainSectionControls = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <button type="button" className="btn btn-outline-danger mx-2">
          Delete
        </button>
        <Routes>
          <Route path="email/">
            <button type="button" className="btn btn-outline-light mx-2">
              New Email
            </button>
          </Route>
          <Route path="compose/">
            <button type="button" className="btn btn-outline-info mx-2">
              Send
            </button>
          </Route>
        </Routes>
      </div>
    </nav>
  );
};

// export default MainSectionControls;
