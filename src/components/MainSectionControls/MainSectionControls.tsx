export const MainSectionControls = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <button type="button" className="btn btn-outline-success mx-2">
          Success
        </button>
        <button type="button" className="btn btn-outline-danger mx-2">
          Danger
        </button>
        <button type="button" className="btn btn-outline-warning mx-2 me-auto">
          Warning
        </button>
        <button type="button" className="btn btn-outline-info mx-2">
          Info
        </button>
        <button type="button" className="btn btn-outline-light mx-2">
          Light
        </button>
      </div>
    </nav>
  );
};

export default MainSectionControls;
