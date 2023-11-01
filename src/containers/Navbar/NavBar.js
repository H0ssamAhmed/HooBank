import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/logo.svg'
import './NavBar.css'

const NavBar = () => {
  const [navbarBackground, setNavbarBackground] = useState('#0d0f1b');
  const [border, setBorder] = useState('1px solid transparent');
  const handleScroll = () => {
    if (window.scrollY > 400) {
      setNavbarBackground('linear-gradient(216deg, #ffffff -278.56%, #6d6d6d -78.47%, #11101d 91.61%)');
      setBorder('1px solid var(--main-color)')
    } else {
      setNavbarBackground('#0d0f1b');
      setBorder('1px solid transparent')
    }

  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    };
  }, []);


  return (
    <>
      <Navbar expand="lg" fixed={"top"} style={{ background: navbarBackground, borderBottom: border, }} >
        <Container>
          <Navbar.Brand href="#Home" className='hid1den-right'>
            <img src={logo} alt='logo' className='logo img-fluid' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className='toggler' />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto hid2den-left">
              <Nav.Link href="#Home" className='fs-6 rounded m-3 text-white'>Home</Nav.Link>
              <Nav.Link href="#Features" className='fs-6 rounded m-3 text-white'>Features</Nav.Link>
              <Nav.Link href="#Product" className='fs-6 rounded m-3 text-white'>Product</Nav.Link>
              <Nav.Link href="#clients" className='fs-6 rounded m-3 text-white'>Clients</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar





// import React, { useEffect, useState } from 'react';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import logo from '../../assets/logo.svg';
// import './NavBar.css';

// const NavBar = () => {
//   const [navbarBackground, setNavbarBackground] = useState('transparent');

//   const changeBackground = () => {
//     if (window.scrollY >= 100) {
//       setNavbarBackground('#222'); // Change to your desired background color
//     } else {
//       setNavbarBackground('transparent');
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', changeBackground);
//     return () => {
//       window.removeEventListener('scroll', changeBackground);
//     };
//   }, []);

//   return (
//     <Navbar expand="lg" style={{ backgroundColor: navbarBackground }} fixed="top">
//       <Container>
//         <Navbar.Brand href="#Home">
//           <img src={logo} alt="" className="logo img-fluid" />
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ms-auto">
//             <Nav.Link href="#Home" className="fs-5 rounded m-3 text-white">Home</Nav.Link>
//             <Nav.Link href="#Features" className="fs-5 rounded m-3 text-white">Features</Nav.Link>
//             <Nav.Link href="#Product" className="fs-5 rounded m-3 text-white">Product</Nav.Link>
//             <Nav.Link href="#clients" className="fs-5 rounded m-3 text-white">Clients</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavBar;
