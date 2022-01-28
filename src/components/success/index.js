import { useState, useEffect } from 'preact/hooks'
import style from './style.css'

export default function Success({state}) {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false)
      }, 2000)
    }
  }, [copied])

  return <>
    <span className={style.checkmark} children='&#10003;' />
    <h2 children='Uploaded successfully!' />
    <img src={state.img} alt='' className={style.img} />
    <div className={style.copy_box}>
      <p>{state.url}</p>
      <button onClick={() => {
        navigator.clipboard.writeText(state.url)
        setCopied(true)
      }} className={copied && style.copied} children={copied ? 'Copied' : 'Copy link'} />
    </div>
  </>
}
