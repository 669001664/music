import React from "react";
import { Icon } from "choerodon-ui";
import { Modal } from 'choerodon-ui/pro';
import Navbar from './Navbar'
import styles from './style.module.css'

const Header: React.FC = () => {

  const handleOpenLoginModal = () => {
    const key = Modal.key();
    Modal.open({
      key,
      title: '登录',
      children: (
        <div>
          <p>1111</p>
        </div>
      )
    })
  }

  return (
    <div className={styles.root}>
      <div className={styles.actions}>
        <a onClick={handleOpenLoginModal} className={styles.logo}>登录</a>
        <div className={styles['navigate-icon']}>
          <Icon style={{ fontSize: '20px' }} type="navigate_before" />
          <Icon style={{ fontSize: '20px' }} type="navigate_next" />
        </div>
      </div>
      <div className={styles.content}>
        <div>
          {<Navbar />}
        </div>
        {/* <div className={styles.operations}>
          <Searcher />
          <div className={styles.githubLogo} onClick={() => window.open(REPOSITORY)} />
        </div> */}
      </div>
    </div>
  );
}

export default Header;