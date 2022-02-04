import styles from '../styles/AboutUs.module.scss';

const AboutUs = () => (
  <div className={styles.aboutUsWrapper} id="about">
    <div className="sectionWrapper">
      <div className={styles.overlay}>
        <div className="heading">[Logo]</div>
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.about}>
          <div className="heading">About Us</div>
          <div className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices vulputate posuere tristique. In sed
            odio nec aliquet eu proin mauris et
          </div>
        </div>

        <div className={styles.dividerGuitar}>
          <img src="/assets/strat.png" alt="guitar-divider" />
        </div>

        <div className={styles.history}>
          <div className="heading">Our Teaching</div>
          <div className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices vulputate posuere tristique. In sed
            odio nec aliquet eu proin mauris et
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AboutUs;
