import { useRecoilState, useResetRecoilState } from 'recoil';
import { currentMailboxState, currentPageState } from '../../recoil/atoms';

interface SidebarButtonProps {
  name: string;
}

export const SidebarButton = ({ name }: SidebarButtonProps) => {
  const [currentMaibox, setCurrentMailbox] = useRecoilState(currentMailboxState);
  const resetPageNumber = useResetRecoilState(currentPageState);
  const textColor = currentMaibox === name ? 'text-warning' : 'text-light';
  return (
    <li className="nav-item">
      <a
        href="#"
        onClick={() => {
          setCurrentMailbox(name);
          resetPageNumber();
        }}
        className={`nav-link active ${textColor}`}
      >
        {name}
      </a>
    </li>
  );
};

export default SidebarButton;
