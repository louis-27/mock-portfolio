import { Link } from "react-scroll";

const NavLink = ({ to }) => {
  return (
    <Link to={to} smooth={true} duration={50} className="nav-link">
      {to[0].toUpperCase() + to.substring(1)}
    </Link>
  );
};

export default NavLink;
