/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdMusicNote } from 'react-icons/md';

const NavItem = styled.a`
  color: white;
  margin: 0 1rem;
  cursor: pointer;
  &:hover {
    color: var(--color-gray);
  }
`;

const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--color-black);
  padding: 1rem 2rem;
`;

const NavSectionMain = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media screen and (max-width: 1150px) {
    display: none;
  }
`;

const NavSectionLogin = styled.div`
  list-style: none;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  a {
    color: white;
    margin: 0 1rem;
    text-decoration: none;
    transition: 0.5s ease;
    &:hover {
      border-bottom: 1px solid var(--color-golden);
    }
  }
  div {
    width: 1px;
    height: 30px;
    background-color: var(--color-golden);
  }
  @media screen and (max-width: 650px) {
    display: none;
  }
`;

const NavMobile = styled.div`
  display: none;
  @media screen and (max-width: 1150px) {
    display: flex;
  }
`;

const NavMobileOverlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: black;
  transition: 0.5s ease;
  z-index: 5;
  svg {
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
  }
`;

const NavSectionMobileMain = styled.ul`
  list-style: none;
  li {
    margin: 2rem;
    font-size: 2rem;
    text-align: center;
  }
`;

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <Nav>
      <h1 style={{ color: 'white' }}>LOGO</h1>
      <NavSectionMain>
        <li>
          <NavItem href="#home">Home</NavItem>
        </li>
        <li>
          <NavItem href="#about">About</NavItem>
        </li>
        <li>
          <NavItem href="#services">Services</NavItem>
        </li>
        <li>
          <NavItem href="#awards">Awards</NavItem>
        </li>
        <li>
          <NavItem href="#contact">Contact</NavItem>
        </li>
      </NavSectionMain>
      <NavSectionLogin>
        <a href="#login">Login / Register</a>
        <div />
        <a href="#login">Book Lessons</a>
      </NavSectionLogin>
      <NavMobile>
        <GiHamburgerMenu
          style={{ cursor: 'pointer' }}
          color="#fff"
          fontSize={27}
          onClick={() => {
            setToggleMenu(true);
          }}
        />

        {toggleMenu && (
          <NavMobileOverlay className="slide-bottom">
            <MdMusicNote
              color="#fff"
              fontSize={27}
              onClick={() => {
                setToggleMenu(false);
              }}
            />
            <NavSectionMobileMain>
              <li>
                <NavItem href="#home">Home</NavItem>
              </li>
              <li>
                <NavItem href="#about">About</NavItem>
              </li>
              <li>
                <NavItem href="#services">Services</NavItem>
              </li>
              <li>
                <NavItem href="#awards">Awards</NavItem>
              </li>
              <li>
                <NavItem href="#contact">Contact</NavItem>
              </li>
            </NavSectionMobileMain>
          </NavMobileOverlay>
        )}
      </NavMobile>
    </Nav>
  );
};
export default Navbar;
