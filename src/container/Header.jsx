import styles from '../styles/Header.module.scss';
import { SubHeading } from '../components';

const Header = () => (
  <div id="home" style={{ backgroundColor: 'var(--color-black)' }}>
    <div className="sectionWrapper">
      <div>
        <SubHeading title={'Vivamus vitae consectetur erat.'} />
        <div className="heading">Lorem ipsum dolor sit amet, consectetur.</div>
        <div className="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed
          ornare nibh. Suspendisse dignissim id justo quis interdum. Phasellus
          ut tellus porta, feugiat mi eu, ullamcorper massa. Nullam dignissim
          tempus nisi, vel bibendum justo tristique quis. Etiam nec ligula non
          neque varius cursus ac a nunc. Fusce laoreet egestas enim,{' '}
        </div>
      </div>

      <div className={styles.imgWrapper}>
        <img
          className={styles.image}
          src="/assets/guitar-keanu.webp"
          alt="header img"
        />
      </div>
    </div>
  </div>
);

export default Header;
