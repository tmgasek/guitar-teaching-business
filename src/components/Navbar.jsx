import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdMusicNote } from 'react-icons/md';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav>
      <h1 style={{ color: 'var(--color-white)' }}>LOGO</h1>
      <div>
        <li>
          <div href="#home">Home</div>
        </li>
        <li>
          <div href="#about">About</div>
        </li>
        <li>
          <div href="#services">Services</div>
        </li>
        <li>
          <div href="#awards">Awards</div>
        </li>
        <li>
          <div href="#contact">Contact</div>
        </li>
      </div>
      <div>
        <a href="#login">Login / Register</a>
        <div />
        <a href="#login">Book Lessons</a>
      </div>
      <div>
        <GiHamburgerMenu
          style={{ cursor: 'pointer' }}
          color="#fff"
          fontSize={27}
          onClick={() => {
            setToggleMenu(true);
          }}
        />

        {toggleMenu && (
          <div className="slide-bottom">
            <MdMusicNote
              color="#fff"
              fontSize={27}
              onClick={() => {
                setToggleMenu(false);
              }}
            />
            <div>
              <li>
                <div href="#home">Home</div>
              </li>
              <li>
                <div href="#about">About</div>
              </li>
              <li>
                <div href="#services">Services</div>
              </li>
              <li>
                <div href="#awards">Awards</div>
              </li>
              <li>
                <div href="#contact">Contact</div>
              </li>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
