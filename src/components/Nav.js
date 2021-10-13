import NavLink from "./NavLink";

const Nav = () => {
  return (
    <nav className="fixed top-8 left-0 right-0 flex justify-between w-4/5 m-auto z-50">
      <div>Logo</div>
      <div className="bg-blue-500 text-gray-300 rounded-md py-1">
        <NavLink to="home" />
        <NavLink to="about" />
        <NavLink to="products" />
        <NavLink to="contact" />
      </div>
    </nav>
  );
};

export default Nav;
