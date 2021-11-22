import React, { useEffect, useState } from 'react';
import Signup from '../Signup';
import styles from './styles.module.scss';

function Login() {
  const [signIn, setSignIn] = useState(false);

  useEffect((params) => {

  })
  return (
    <div className={styles.login}>
      <div className={styles.loginBg}>
        <img
          className={styles.loginLogo}
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
        <button
          onClick={() => setSignIn(true)}
          className={styles.loginBtn}>
          Sign in
        </button>
        <div className={styles.loginGradient}></div>
      </div>
      <div className={styles.loginBody}>
        {signIn ? (
          <Signup />
        ) : (
          <>
            <h1>Unlimited films, TV programs and more.</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>Ready to watch? Enter your email to create or restart your membership</h3>
            <div className={styles.loginInput}>
              <form>
                <input type="email" placeholder="Email Address" />
                <button
                  onClick={() => setSignIn(true)}
                  className={styles.loginGetStarted}>GET STARTED</button>
              </form>
            </div>
          </>
        )}

      </div>
    </div>
  )
}

export default Login;
