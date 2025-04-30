import React from 'react';

// Styles
import styles from './home.module.css';

const Home: React.FC = () => {
  return (
    <>
      <div className={styles.heroHeaderContainer}>
        <h2 className={styles.heroHeaderContainerTitle}>Adolfo Moyano</h2>
        <h4 className={styles.heroHeaderContainerSubtitle}>Available for Work</h4>
      </div>
    </>
  );
};

export default Home;
