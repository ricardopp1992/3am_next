import { FunctionComponent } from "react"

import { IHistoryDescriptionProps } from "../../interfaces/Histories.interface"
import style from '../../styles/components/_history-description.module.scss';

const HistoryDescription: FunctionComponent<IHistoryDescriptionProps> = ({url, history}) => {
  return (
    <div className={style.historyDescription}>
      <img
        src={`${url}${history.imageArticle[0].url}`}
        alt={history.imageArticle[0].alternativeText} />
      <h1>{ history.title }</h1>
    </div>
  )
}

export default HistoryDescription;