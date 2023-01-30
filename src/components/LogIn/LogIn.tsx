import { useForm } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';

import { signIn } from '../../client/email-client';
import { signInRequest } from '../../client/requests';
import { isLoggedInState } from '../../recoil/atoms';

export const LogIn = () => {
  const setLogInState = useSetRecoilState(isLoggedInState);
  const { register, handleSubmit } = useForm();

  const submitCreds = async (data: any) => {
    const res = await signIn(data as signInRequest)
      .then((r) => {
        return r;
      })
      .catch((err) => console.log(`ERR: ${err}`));

    if (res.status === 200) {
      setLogInState(true);
    }
  };

  return (
    <div className="d-flex align-items-center text-center form-signin">
      <form onSubmit={handleSubmit(submitCreds)}>
        <h1 className="h3 my-3 fw-normal">Please sign in</h1>

        <div className="form-floating my-2">
          <input
            {...register('email')}
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating my-2">
          <input
            {...register('password')}
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <input {...register('domain')} type="hidden" defaultValue="gmail.com" />
        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Sign in
        </button>
      </form>
    </div>
  );
};

export default LogIn;
