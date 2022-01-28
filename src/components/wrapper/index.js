import { cloneElement } from 'preact';
import style from './style.css';

export default function Wrapper({children, ...props}) {
  const element = cloneElement(children, props);
  return <div className={style.card} children={element} />
}
