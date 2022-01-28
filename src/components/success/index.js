import { useState, useEffect } from 'preact/hooks'
import style from './style.css'
import { get_url } from '../../api/image'

export default function Success({state, dispatch}) {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false)
      }, 2000)
    }
  }, [copied])
  const url = get_url(state.url)

  return <>
    <span className={style.checkmark} children='&#10003;' />
    <h2 children='Uploaded successfully!' />
    <img src={state.img} alt='' className={style.img} />
    <div className={style.copy_box}>
      <p>{url}</p>
      <button onClick={() => {
        navigator.clipboard.writeText(url)
        setCopied(true)
      }} className={copied && style.copied} children={copied ? 'Copied' : 'Copy link'} />
    </div>
    <button className={style.button} children='Upload another' onClick={() => dispatch({type: 'upload'})} />
  </>
}
