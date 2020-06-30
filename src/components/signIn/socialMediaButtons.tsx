import { FunctionComponent } from 'react'
import { Row, Col} from 'react-bootstrap'
import styles from '../../styles/components/_SignInButtons.module.scss'

const  SocialMediaButtons: FunctionComponent<IConnectTo> = ({connectTo}) => {
  const socialMediaWidth = 30;
  const socialMedias = [
    {type: 'google', imageSrc: '/image/gg_logo.png'},
    {type: 'facebook', imageSrc: '/image/fb_logo.png'},
    {type: 'instagram', imageSrc: '/image/ig_logo.png'},
    {type: 'twitter', imageSrc: '/image/tw_logo.png'}
  ];

  return(

    <Row>
        <Col sm={12} className={styles.socialMedia}>
          {
            socialMedias.map((icon) =>(
              <button key={icon.type} onClick={() => connectTo(icon.type)}>
                <img  width={socialMediaWidth} src={icon.imageSrc} />
            </button>
            ))
          }
          
        </Col>
      </Row>
  )
}

interface IConnectTo {
  connectTo: Functions;
}

export default SocialMediaButtons