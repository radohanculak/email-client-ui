import { useRecoilState, useResetRecoilState } from 'recoil';
import { inputFormState } from '../../recoil/atoms';

export const InputArea = () => {
  const [formInput, setFormInput] = useRecoilState(inputFormState);
  const deleteForm = useResetRecoilState(inputFormState);
  const { recipient, subject, body } = formInput;
  return (
    <>
      <div className="input-group px-3 py-2">
        <span className="input-group-text" id="basic-addon1">
          To:
        </span>
        <input
          type="email"
          value={recipient}
          onChange={(e) => {
            setFormInput({ recipient: e.target.value, subject: subject, body: body });
          }}
          className="form-control"
          placeholder="To"
        />
      </div>
      <div className="input-group px-3 py-2">
        <span className="input-group-text" id="basic-addon1">
          Subject:
        </span>
        <input
          type="text"
          value={subject}
          onChange={(e) => {
            setFormInput({ subject: e.target.value, recipient: recipient, body: body });
          }}
          className="form-control"
          placeholder="Subject"
        />
      </div>
      <div className="container-fluid flex-grow-1 pt-2 pb-4 px-3">
        <div className="input-group h-100">
          <textarea
            onChange={(e) => {
              setFormInput({ body: e.target.value, subject: subject, recipient: recipient });
            }}
            className="form-control"
            value={body}
          />
        </div>
      </div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <button type="button" onClick={deleteForm} className="btn btn-outline-danger mx-2">
            Delete
          </button>

          <button type="button" onClick={(e) => console.log('send')} className="btn btn-outline-info mx-2">
            Send
          </button>
        </div>
      </nav>
    </>
  );
};

export default InputArea;
