import React from "react";
import { Icon } from "choerodon-ui";
import Navbar from './Navbar'
import styles from './style.module.css'

const Header: React.FC = () => {

  console.log(11111);

  return (
    <div className={styles.root}>
      <div className={styles.actions}>
        <a className={styles.logo}>Hover Me</a>
        <div className={styles['navigate-icon']}>
          <Icon style={{fontSize: '20px'}} type="navigate_before" />
          <Icon style={{fontSize: '20px'}} type="navigate_next" />
        </div>
      </div>
      <div className={styles.content}>
        <div>{<Navbar />}</div>
        {/* <div className={styles.operations}>
          <Searcher />
          <div className={styles.githubLogo} onClick={() => window.open(REPOSITORY)} />
        </div> */}
      </div>
    </div>
  );
}

export default Header;