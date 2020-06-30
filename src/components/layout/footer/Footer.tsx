import { FunctionComponent } from "react";
import { Container, Row, Col, Media  } from 'react-bootstrap';
import Link from 'next/link'

import styles from '../../../styles/components/_footer.module.scss';

const Footer: FunctionComponent = () => {
  return(
    <footer className={styles.footer}>
      <Container className={styles.container}>
        <Row>
          <Col md={2} sm={12}>
            <Link href='/'>
              <a>
                <img className={styles.logo3Am} width={150} src='/image/3am_logo.png' alt="logo 3AM"/>
              </a>
            </Link>
          </Col>
          <Col md={{ span: 8, offset:1 }} sm={10} className={styles.list}>
            <Media as="li" >
                <h6 className={styles.mapSite}>Site map</h6>
            </Media>
            <Media as="li">
              <Link href='/'>
                <a>Home</a>
              </Link>
            </Media>
            <Media as="li">
              <Link href='/'>
                <a>search articles</a>
              </Link>
            </Media>
          </Col>
          <Col md={1} sm={2} className={styles.SocialMedia}>
            <Link href='/'>
              <img width={32} src='/fb-icon.png'/>
            </Link>
            <Link href='/'>
              <img width={32} className={styles.iconIg} src='/ig-icon.png'/>
            </Link>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col md='auto' sm={12} >
            <img className={styles.logoSV}  width={200} src='/image/space_view.png' alt="logo Space View"/>
          </Col>
        </Row>
        <Row>
          <Col className={styles.termCond} lg={3} md={5}  xs={12} >
            <h6>Copyright © 2010-2020</h6>
          </Col>
          <Col lg={4} md={5} xs={12}>
            <Link href='/'>
              <a className={styles.termCond}><h6>Term and conditions | Privacy</h6></a>
            </Link>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer 