import React from 'react';

// Styles
import styles from './home.module.css';

// Assets
import profilepic from '@assets/profilepic.jpeg';

const Home: React.FC = () => {
  return (
    <div className={styles.mainHeaderContainer}>
      <div className={styles.heroHeaderContainer}>
        <h2 className={styles.heroHeaderContainerTitle}>Full Stack Engineer | Cloud Specialist</h2>
        <h4 className={styles.heroHeaderContainerSubtitle}>Available for Work</h4>
      </div>
      <div className={styles.titleAndImageContainer}>
        <div className={styles.innerTitleAndImageContainer}>
          <h2 className={styles.title}>Hello, i&apos;m Adolfo Moyano</h2>
          <p className={styles.subtitle}>
            Full stack engineer, devops and cloud <br /> specialist from Buenos Aires, Argentina.
          </p>
        </div>
        <div className={styles.headerImageContainer}>
          <img src={profilepic} alt='profilepic' className={styles.headerImage} />
        </div>
      </div>
    </div>
  );
};

export default Home;
