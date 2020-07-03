import { FunctionComponent } from 'react';
import { Media } from 'react-bootstrap';

import FormSignIn from './formSingIn';
import styles from '../../styles/components/_signInDesktop.module.scss';

const SignInDesktop: FunctionComponent = () => {
  return(
    <Media className={styles.container}>
      <img width={300} className={styles.img} src='/image/scare_face.png'/>
      <Media className={styles.form}>
        <FormSignIn />
      </Media>
    </Media>
  );
}

export default SignInDesktop;