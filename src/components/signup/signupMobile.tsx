import {FunctionComponent } from 'react';
import {Container} from 'react-bootstrap';
import styles from '../../styles/components/_signUpMobile.module.scss';
import FormSignUp from './FormSignUp'

const  SignUpMobile: FunctionComponent = () => {

  return(
  <Container className={styles.container}>
      <FormSignUp />
      <img width={200} className={styles.img} src="/image/space_view.png" alt="space view"/>
    </Container>
  )
}

export default SignUpMobile