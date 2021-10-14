import NavLink from './NavLink';

const Nav = ({ sticky, fgColor, bgColor }) => {
  const monochrome = ['white', 'black'];
  fgColor = monochrome.indexOf(fgColor) >= 0 ? `text-${fgColor}` : `text-${fgColor}-500`;
  bgColor = monochrome.indexOf(bgColor) >= 0 ? `bg-${bgColor}` : `bg-${bgColor}-500`;
  const className = (sticky ? 'sticky-nav' : 'normal-nav') + ` ${fgColor} ${bgColor}`;

  return (
    <header className={className}>
      <div>Logo</div>
      {/*<nav className="fixed top-0 left-0 right-0 flex justify-between w-4/5 m-auto z-50">*/}
      <nav className="">
        {/*<div className="bg-blue-500 text-gray-300 rounded-md py-1">*/}
        <div className="">
          <NavLink to="home" />
          <NavLink to="products" />
          <NavLink to="about" />
          <NavLink to="contact" />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
