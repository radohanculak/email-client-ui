import { useRecoilState } from 'recoil';
import { currentMailboxState } from '../../recoil/atoms';

interface SidebarButtonProps {
  name: string;
}

export const SidebarButton = ({ name }: SidebarButtonProps) => {
  const [currentMaibox, setCurrentMailbox] = useRecoilState(currentMailboxState);
  const textColor = currentMaibox === name ? 'text-warning' : 'text-light';
  return (
    <li className="nav-item">
      <a href="#" onClick={() => setCurrentMailbox(name)} className={`nav-link active ${textColor}`}>
        {name}
      </a>
    </li>
  );
};

export default SidebarButton;
