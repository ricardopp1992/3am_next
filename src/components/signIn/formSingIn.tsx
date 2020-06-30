import { FunctionComponent } from 'react'
import SocialMediaButtons from '../signIn/socialMediaButtons' 
import { Container, Form, FormGroup, FormLabel, FormControl, Row } from 'react-bootstrap'
import styles from '../../styles/components/_formsignIn.module.scss'

const  FormSignIn: FunctionComponent = () => {
  const FormInfo = [
    {name: 'email', label: 'Write your email', type: 'email', placeholder:'Ingrese email'},
    {name: 'password', label: 'Create your password', type: 'password', placeholder:'Ingrese password'},
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
    <Container className={styles.container}>
      <img className={styles.img} width={100} src="/image/3am_logo_black.png" alt="3a Logo" />
      <div className={styles.text}>
        <h6 className={styles.color}>SIGN In</h6>
        <p className={styles.color}>with your social network</p>
      </div>
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
        <button type="submit">Sing In</button>
      </Form>
    </Container>
  )
}

export default FormSignIn