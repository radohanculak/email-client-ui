interface PageLinkProps {
  pageNumber: number;
}

export const PageLink = ({ pageNumber }: PageLinkProps) => {
  return (
    <li className="page-item">
      <a className="page-link" href="#">
        {pageNumber}
      </a>
    </li>
  );
};

export default PageLink;
