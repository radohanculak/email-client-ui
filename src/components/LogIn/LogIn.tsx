import { useForm } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';
import { client } from '../../client/email-client';
import { signInRequest } from '../../client/requests';
import { isLoggedInState } from '../../recoil/atoms';

export const LogIn = () => {
  const setLogInState = useSetRecoilState(isLoggedInState);
  const { register, handleSubmit } = useForm();

  const submitCreds = async (data: any) => {
    await client
      .signIn(data as signInRequest)
      .then((r) => {
        if (r.status === 200) {
          client.sendNotifitcation({
            title: 'R-Mail',
            body: 'Authentication successful',
          });
          setLogInState(true);
        }
        return r;
      })
      .catch((err) => console.log(`ERR: ${err}`));
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
