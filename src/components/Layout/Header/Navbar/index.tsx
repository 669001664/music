import React from 'react'
import { useNavigate, useLocation } from "react-router-dom";
import classNames from 'classnames';
import ROUTES from 'constants/routes';

import styles from './style.module.css';

const NAVBAR = {
  [ROUTES.DISCOVERY]: [
    {
      label: '个性推荐',
      route: ROUTES.RECOMMENDATION
    },
    {
      label: '歌单',
      route: ROUTES.SONG_LIST
    }
  ]
}

const Navbar = (): JSX.Element | null => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const matchPathPrefix = Object.keys(NAVBAR).find(item => pathname.startsWith(item));

  if (!matchPathPrefix) {
    return null;
  }

  const routers = NAVBAR[matchPathPrefix];

  const hasRouter = routers.find(item => item.route === pathname);

  const handleItemClick = (route: string) => {
    navigate(route);
  }

  return (
    <div className={styles.root}>
      {routers.map(({ label, route }, index) => {
        const isActicve = hasRouter ? route === pathname : index === 0;
        return (
          <div
            key={label}
            className={classNames(styles.item, isActicve ? styles.active : '')}
            onClick={() =>handleItemClick(route)}
          >
            {label}
          </div>
        )
      })}
    </div>
  )
}

export default Navbar;