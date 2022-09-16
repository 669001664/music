import React, { ReactNode } from "react"
import Header from "./Header";
import Sider from "./Sider";
import styles from './style.module.css'

const Layout = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <div>
      <Header />
      <div className={styles.middle}>
        <Sider />
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
}

export default Layout