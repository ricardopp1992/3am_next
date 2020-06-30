import { FunctionComponent } from 'react'
import { Media } from 'react-bootstrap'
import FormSignUp from './FormSignUp'

import styles from '../../styles/components/_signInDesktop.module.scss'

const SignUpDesktop: FunctionComponent = () => {

  return(
      <Media className={styles.container}>
          <img width={300} className={styles.img} src='/image/scare_face.png'/>
        <Media className={styles.form}>
        <FormSignUp />
        </Media>
      </Media>
  )
}

export default SignUpDesktop;