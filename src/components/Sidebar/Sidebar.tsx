import SidebarButton from '../SidebarButton/SidebarButton';
import SidebarDropdown from '../SidebarDropdown/SidebarDropdown';
import './Sidebar.css';

export const Sidebar = () => {
  const sidebarButtons = ['Home', 'Dashboard', 'Orders', 'Products'];

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

        <ul className="nav nav-pills flex-column mb-auto">
          {sidebarButtons.map((button) => (
            <SidebarButton name={button} />
          ))}
        </ul>
        <hr />
        <SidebarDropdown />
      </div>
    </>
  );
};

export default Sidebar;
