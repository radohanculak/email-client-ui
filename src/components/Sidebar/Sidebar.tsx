import { useEffect, useState } from 'react';

import SidebarButton from '../SidebarButton/SidebarButton';
import SidebarDropdown from '../SidebarDropdown/SidebarDropdown';
import { client } from '../../client/email-client';

import './Sidebar.css';
import { useSetRecoilState } from 'recoil';
import { currentMailboxState } from '../../recoil/atoms';

export const Sidebar = () => {
  const [mailboxes, setMailboxes] = useState([]);
  const setCurrentMailbox = useSetRecoilState(currentMailboxState);

  const getMailboxes = () => {
    client
      .listMailboxes()
      .then((res) => {
        setMailboxes(res.data.mailbox_names);
        setCurrentMailbox(res.data.mailbox_names[0] ?? 'INBOX');
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => getMailboxes(), []);

  return (
    <>
      <div className="d-flex flex-column flex-shrink-1 p-3 text-bg-dark" style={{ width: '240px' }}>
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
          <svg className="bi pe-none me-2" width="40" height="32">
            <use xlinkHref="#bootstrap" />
          </svg>
          <span className="fs-4">Sidebar</span>
        </a>
        <hr />

        <ul className="nav flex-column mb-auto">
          {mailboxes.map((mailboxName: any) => (
            <SidebarButton key={mailboxName} name={mailboxName} />
          ))}
        </ul>
        <hr />
        <SidebarDropdown />
      </div>
    </>
  );
};

export default Sidebar;
