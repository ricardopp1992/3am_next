import { FunctionComponent } from "react"
import { Row, Col } from 'react-bootstrap'

import { IHistoryDescriptionProps } from "../../interfaces/Histories.interface"
import style from '../../styles/components/_history-description.module.scss'
import ButtonDescription from '../articleList/buttonDescription'

const HistoryDescription: FunctionComponent<IHistoryDescriptionProps> = ({url, history}) => {
  return (
    <>
    <Row className={style.content}>
      <Col xs={10} className={style.modal}>
      <img
          className={style.img}
          src={`${url}${history.imageArticle[0].url}`}
          alt={history.imageArticle[0].alternativeText} />
      <div className={style.description}>
        <h1>{ history.title }</h1>
        <p>{history.description}</p>
      </div>
      </Col> 
    </Row>
    <ButtonDescription />
  </>

  )
}

export default HistoryDescription;