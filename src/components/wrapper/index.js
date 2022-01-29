import { cloneElement } from 'preact';
import style from './style.css';

export default function Wrapper({children, ...props}) {
  const element = cloneElement(children, props);
  return <div className={style.card}>
    <button
      className={style.button}
      children={props.state.theme==='dark' ? 'light' : 'dark'}
      onClick={() => {props.dispatch({type: 'toggle'})}}
    />
    {element}
  </div>;
}
