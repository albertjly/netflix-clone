import React from 'react';
import { useSelector } from 'react-redux';
import Nav from '../../components/Nav';
import { selectUser } from '../../features/userSlice';
import { auth } from '../../firebase';
import Plans from '../Plans';
import styles from './styles.module.scss';

function Profile() {
  const user = useSelector(selectUser);

  return (
    <div className={styles.profile}>
      <Nav />
      <div className={styles.profileBody}>
        <h1>Edit profile</h1>
        <div className={styles.profileInfo}>
          <img src={`https://media.istockphoto.com/vectors/african-american-rapper-square-flat-icon-vector-id483760360?b=1&k=6&m=483760360&s=612x612&w=0&h=O8Tl6dTWVPk75Xm-18zeZpOAw56E68Xkm-y_mjoHPFY=`}
            alt="" />
          <div className={styles.profileDetails}>
            <h2>
              {user.email}
            </h2>
            <div className={styles.profilePlans}>
              <h3>Plans</h3>
              <Plans />
              <button
                onClick={() => auth.signOut()}
                className={styles.profileSignOut}>Sign out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile;
