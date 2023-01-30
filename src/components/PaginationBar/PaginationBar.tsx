import PageLink from './PageLink/PageLink';

export const PaginationBar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <ul className="pagination mb-0">
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <PageLink pageNumber={1} />
          <PageLink pageNumber={2} />
          <PageLink pageNumber={3} />
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default PaginationBar;
