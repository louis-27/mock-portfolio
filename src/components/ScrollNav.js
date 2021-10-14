import { useState, useEffect } from 'react';
import Nav from './Nav';

const ScrollNav = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShow(window.pageYOffset >= 138);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return show ? <Nav fgColor="white" bgColor="black" sticky={true} /> : null;
};

export default ScrollNav;
