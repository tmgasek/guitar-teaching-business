import styles from '../styles/Services.module.scss';

const ServiceItem = ({ name, price, length }) => {
  return (
    <div className={styles.serviceItem}>
      <div className={styles.head}>
        <div className={styles.name}>
          <p className="subHeading">{name}</p>
        </div>
        <div className={styles.dash} />
        <div className={styles.price}>
          <p className="paragraph">{price}</p>
        </div>
      </div>
      <div>
        <p className={styles.length}>{length}</p>
      </div>
    </div>
  );
};

export default ServiceItem;
