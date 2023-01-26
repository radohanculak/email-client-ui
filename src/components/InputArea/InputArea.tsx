export const InputArea = () => {
  return (
    <>
      <div className="input-group px-3 py-2">
        <span className="input-group-text" id="basic-addon1">
          To:
        </span>
        <input type="text" className="form-control" placeholder="To" aria-label="To" aria-describedby="basic-addon1" />
      </div>
      <div className="input-group px-3 py-2">
        <span className="input-group-text" id="basic-addon1">
          Subject:
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Subject"
          aria-label="Subject"
          aria-describedby="basic-addon1"
        />
      </div>
      <div className="container-fluid flex-grow-1 pt-2 pb-4 px-3">
        <div className="input-group h-100">
          <textarea className="form-control"></textarea>
        </div>
      </div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <button type="button" className="btn btn-outline-danger mx-2">
            Delete
          </button>

          <button type="button" className="btn btn-outline-info mx-2">
            Send
          </button>
        </div>
      </nav>
    </>
  );
};

export default InputArea;
