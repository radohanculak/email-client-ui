import { useRecoilState } from 'recoil';
import { currentPageState } from '../../recoil/atoms';
import PageLink from './PageLink/PageLink';

export const PaginationBar = () => {
  const [currentPage, setCurrentPage] = useRecoilState(currentPageState);
  // guard min/max page

  return (
    <nav className="navbar navbar-dark bg-dark justify-content-center">
      <ul className="pagination mb-0">
        <li className="page-item">
          <a
            className="page-link bg-dark link-info"
            href="#"
            aria-label="Previous"
            onClick={() => {
              currentPage > 1 ? setCurrentPage(currentPage - 1) : setCurrentPage(1);
            }}
          >
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <PageLink pageNumber={currentPage} />
        <li className="page-item">
          <a
            className="page-link bg-dark link-info"
            href="#"
            aria-label="Next"
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default PaginationBar;
