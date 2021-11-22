import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import styles from './styles.module.scss';

function Nav() {
  const [show, handleShow] = useState(false);
  const history = useHistory();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, [])
  return (
    <div className={`${styles.nav} ${show && styles.navBlack}`}>
      <div className={styles.navContents}>
        <img
          onClick={() => history.push('/')}
          className={styles.navLogo}
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="" />
        <img
          onClick={() => history.push('/profile')}
          className={styles.navAvatar}
          src={`https://media.istockphoto.com/vectors/african-american-rapper-square-flat-icon-vector-id483760360?b=1&k=6&m=483760360&s=612x612&w=0&h=O8Tl6dTWVPk75Xm-18zeZpOAw56E68Xkm-y_mjoHPFY=`}
          alt="" />
      </div>
    </div>
  )
}

export default Nav;
