import styles from '../styles/Services.module.scss';
import { SubHeading } from '../components';
import { guitarLessons, theoryLessons } from '../constants/data';
import ServiceItem from '../components/ServiceItem';

const Services = () => {
  return (
    <div className={styles.servicesWrapper}>
      <div className="sectionWrapper">
        <div className={styles.container}>
          <div className={styles.headingWrapper}>
            <SubHeading title={'Our Services'} />
            <div className="heading">Here's what we offer</div>
          </div>

          <div className={styles.services}>
            <div className={styles.serviceSection}>
              <div className={styles.serviceHeading}>Practical</div>
              <div className={styles.serviceItemsWrapper}>
                {guitarLessons.map((lesson) => (
                  <ServiceItem
                    key={lesson.name}
                    name={lesson.name}
                    price={lesson.price}
                    length={lesson.length}
                  />
                ))}
              </div>
            </div>

            <div className={styles.dividerGuitar}>
              <img src="/assets/guitar-06.png" alt="guitar-divider" />
            </div>

            <div className={styles.serviceSection}>
              <div className={styles.serviceHeading}>Theory</div>
              <div className={styles.serviceItemsWrapper}>
                {theoryLessons.map((lesson) => (
                  <ServiceItem
                    key={lesson.name}
                    name={lesson.name}
                    price={lesson.price}
                    length={lesson.length}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
