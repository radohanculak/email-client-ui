import { useEffect, useState } from 'react';

import SidebarButton from '../SidebarButton/SidebarButton';
import SidebarDropdown from '../SidebarDropdown/SidebarDropdown';
import { client } from '../../client/email-client';
import { useSetRecoilState } from 'recoil';
import { currentMailboxState } from '../../recoil/atoms';

import './Sidebar.css';

export const Sidebar = () => {
  const [mailboxes, setMailboxes] = useState([]);
  const setCurrentMailbox = useSetRecoilState(currentMailboxState);

  const getMailboxes = () => {
    client
      .listMailboxes()
      .then((res) => {
        setMailboxes(res.data.mailboxes);
        setCurrentMailbox(res.data.mailboxes[0].name ?? 'INBOX');
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => getMailboxes(), []);

  return (
    <>
      <div className="d-flex flex-column flex-shrink-1 pt-2 p-3 text-bg-dark" style={{ width: '220px' }}>
        <a className="align-self-center text-white text-decoration-none">
          <span className="fs-3">🦀R-Mail🦀</span>
        </a>
        <hr className="mt-1" />

        <ul className="nav d-flex mb-auto scrollarea">
          {mailboxes.map((mailbox: any) => (
            <SidebarButton key={mailbox.name} name={mailbox.name} />
          ))}
        </ul>
        <hr />
        <SidebarDropdown />
      </div>
    </>
  );
};

export default Sidebar;
