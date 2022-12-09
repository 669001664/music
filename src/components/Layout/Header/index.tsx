import React from "react";
import { useLocalStore, Observer } from "mobx-react-lite";
import Navbar from './Navbar'
import AuthStore from "store/authStore";
import styles from './style.module.css'

const Header: React.FC = () => {

  const localStore = useLocalStore(() => AuthStore);

  return (
    <Observer>
      {() => (
        <div className={styles.root}>
          <div className={styles.actions}>
            <a onClick={() => localStore.login('d', 'd')} className={styles.logo}>登录</a>
            <div className={styles['navigate-icon']}>
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
      )
      }
    </Observer>
  );
}

export default Header;