import { FunctionComponent, useContext } from 'react';
import { Container, Form, FormGroup, FormLabel, FormControl } from 'react-bootstrap';
import Link from 'next/link';

import styles from '../../styles/components/_formsignIn.module.scss';
import SocialMediaButtons from '../signIn/socialMediaButtons';
import { FlashErrorContext } from '../../context/flashErrorContext';
import { IFlashError } from '../../../interfaces/models/user.interface';

const  FormSignIn: FunctionComponent = () => {
  const flashError: IFlashError = useContext(FlashErrorContext);
  const FormInfo = [
    {name: 'username', label: 'Enter your email', type: 'text', placeholder:'email'},
    {name: 'password', label: 'Enter your password', type: 'password', placeholder:'password'},
  ];

  const signIn = (socialMedia: string) => {
    console.log(socialMedia);
  }

  const authenticateUser = (event) => {
    const username = event.currentTarget.username.value;
    const password = event.currentTarget.password.value;

    if (!username || !password) {
      event.preventDefault();
      console.log('credential missing');
    }
  }

  return(
    <Container className={styles.container}>
      <Link href="/">
        <a><img className={styles.img} width={100} src="/image/3am_logo_black.png" alt="3a Logo" /></a>
      </Link>
      <div className={styles.text}>
        <h6 className={styles.color}>SIGN In</h6>
        <p className={styles.color}>with your social network</p>
      </div>
      <SocialMediaButtons connectTo={signIn}/>
      <span className={styles.lineDesktop}/>
      <Form
        onSubmit={authenticateUser}
        method="post"
        action="/auth"
        className={styles.signinForm}>
        {
          flashError.error.length > 0 &&
          <span className={styles.flashMessage}>Your username or password are wrong, please sign in again!</span>
        }
        {
          FormInfo.map((info)=>(
            <FormGroup className={styles.ColorFont} key={info.name}>
              <FormLabel>{info.label}</FormLabel>
              <FormControl type={info.type} name={info.name} placeholder={info.placeholder}/>
            </FormGroup>
          ))
        }
        <button type="submit">Sing In</button>
      </Form>
    </Container>
  )
}

export default FormSignIn