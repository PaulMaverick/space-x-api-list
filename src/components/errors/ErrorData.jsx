import style from '../../styles/ErrorData.module.css'

function ErrorData(props) {

  return (
    <div className={style.container}>{props?.errorMessage || "Fetching Data Error"}</div>
  )
}

export default ErrorData