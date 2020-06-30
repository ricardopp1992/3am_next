import { FunctionComponent } from "react";
import {Container} from 'react-bootstrap';
import styles from '../../styles/components/_SignInMobile.module.scss'

import FormSignIn from './formSingIn'


const SignInMobile: FunctionComponent = ()=> {

  return(
    <div className={styles.container}>
        <FormSignIn />
        <img width={200} className={styles.img} src="/image/space_view.png" alt="space view"/>
    </div>
  )
}

export default SignInMobile