import style from './style.css'

export default function Loader() {
  return <>
    <h2>Uploading...</h2>
    <div className={style.outer}>
      <div className={style.inner} />
    </div>
  </>
}
