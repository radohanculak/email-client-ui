export const SidebarDropdown = () => {
  return (
    <div className="dropdown">
      <a
        href="#"
        className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"></img>
        <strong>mdo</strong>
      </a>
      <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
        <li>
          <a className="dropdown-item" href="#">
            New project...
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Settings
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Profile
          </a>
        </li>
        <li>
          <hr className="dropdown-divider"></hr>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Sign out
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SidebarDropdown;
