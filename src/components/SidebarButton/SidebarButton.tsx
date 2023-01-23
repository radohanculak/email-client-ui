interface SidebarButtonProps {
  name: string;
}

export const SidebarButton = ({ name }: SidebarButtonProps) => {
  return (
    <a href="#" className="nav-link text-white">
      <svg className="bi pe-none me-2" width="16" height="16">
        <use xlinkHref="#speedometer2" />
      </svg>
      {name}
    </a>
  );
};

export default SidebarButton;
