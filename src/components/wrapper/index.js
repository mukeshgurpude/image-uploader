import style from './style.css';

export default function Wrapper({children}) {
  return (
    <div className={style.card}>
      {children}
    </div>
  )
}
