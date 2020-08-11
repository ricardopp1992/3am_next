import { FunctionComponent } from "react"

import style from '../../styles/components/_history-description.module.scss'

const ButtonDescription: FunctionComponent= ()=> {
  return (
    <>
      <button className={style.seeMore}>Ver mas</button>
    </>
    )
  }
  
  export default ButtonDescription;