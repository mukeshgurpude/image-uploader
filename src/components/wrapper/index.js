import { cloneElement } from 'preact';
import style from './style.css';

export default function Wrapper({children, ...props}) {
  const element = cloneElement(children, props);
  return <div className={style.card}>
    <button
      className={style.button}
      onClick={() => {props.dispatch({type: 'toggle'})}}
      dangerouslySetInnerHTML={{
        __html: (props.state.theme === 'light') ? 'Dark &#127769;' : 'Light &#9728;'
      }}
    />
    {element}
  </div>;
}
