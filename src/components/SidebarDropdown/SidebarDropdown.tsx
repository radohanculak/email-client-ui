import { useSetRecoilState } from 'recoil';

import { client } from '../../client/email-client';
import { isLoggedInState } from '../../recoil/atoms';

export const SidebarDropdown = () => {
  const setLogInState = useSetRecoilState(isLoggedInState);
  const signOutHandler = async () => {
    await client
      .signOut()
      .then()
      .catch((e) => console.log(e));
    setLogInState(false);
  };

  return (
    <button type="button" onClick={signOutHandler} className="btn btn-outline-danger mx-2">
      Log Out
    </button>
  );
};

export default SidebarDropdown;
