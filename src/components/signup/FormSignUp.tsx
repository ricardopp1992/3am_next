import { FunctionComponent } from 'react'
import SocialMediaButtons from '../signIn/socialMediaButtons' 
import { Container, Form, FormGroup, FormLabel, FormControl } from 'react-bootstrap'

import styles from '../../styles/components/_formsignUp.module.scss'

const  FormSignUp: FunctionComponent = () => {
  const FormInfo = [
    {name: 'name', label: 'Choose an username', type: 'text', placeholder:'Ingrese nombre'},
    {name: 'email', label: 'Write your email', type: 'email', placeholder:'Ingrese email'},
    {name: 'password', label: 'Create your password', type: 'password', placeholder:'Ingrese password'},
    {name: 'repeatPassword', label: 'Repeat your password', type: 'password', placeholder:'Repetir password'}
  ]

  const signIn = (socialMedia: string) => {
    console.log(socialMedia);
  }

  const handle = (event) => {
    event.preventDefault();
    console.log(event.currentTarget.name.value);
    console.log(event.currentTarget.email.value);
    console.log(event.currentTarget.password.value);
    console.log(event.currentTarget.repeatPassword.value);
  }

  return(
    <Container  fluid className={styles.container}>
      <img className={styles.img} width={100} src="/image/3am_logo.png" alt="3a Logo" />
      <Container className={styles.text}>
        <h6>SIGN UP</h6>
        <p>with your social network</p>
      </Container>
      <SocialMediaButtons connectTo={signIn}/>
      <span className={styles.lineDesktop}/>
      <Form onSubmit={handle} className={styles.Form}>
         {
          FormInfo.map((info)=>(
            <FormGroup className={styles.ColorFont} key={info.name}>
              <FormLabel>{info.label}</FormLabel>
              <FormControl type={info.type} name={info.name} placeholder={info.placeholder}/>
            </FormGroup>
          ))
        }
        <Form.Check type="checkbox" label="Acepto terminos y condiciones"/>
        <button type="submit">Sing Up</button>
      </Form>
    </Container>
  )
}

export default FormSignUp