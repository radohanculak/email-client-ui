import { currentPageState } from '../../../recoil/atoms';
import { useSetRecoilState } from 'recoil';

interface PageLinkProps {
  pageNumber: number;
}

export const PageLink = ({ pageNumber }: PageLinkProps) => {
  const setCurrentPage = useSetRecoilState(currentPageState);

  return (
    <li className="page-item">
      <a className="page-link" href="#" onClick={() => setCurrentPage(pageNumber)}>
        {pageNumber}
      </a>
    </li>
  );
};

export default PageLink;
