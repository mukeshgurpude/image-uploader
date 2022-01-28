import { useRef } from 'preact/hooks'
import style from './style.css'
import image from '../../assets/image.svg'

export default function Uploader({dispatch}) {
  const div = useRef(null)
  function dropHandler(ev) {
    ev.preventDefault()
    ev.stopPropagation()
    const files = ev?.dataTransfer?.files || ev.target.files
    const file_to_upload = files[0]
    dispatch({type: 'uploading'})
    setTimeout(() => {
      dispatch({type: 'success', data: file_to_upload})
    }, 2000)
  }

  return <>
    <h2>Upload your image</h2>
    <p>File should be jpeg, png...</p>
    <div ref={div} id={style.file}
      onDragOver={(ev) => { ev.preventDefault(); ev.stopPropagation() }}
      onDrop={dropHandler}
    >
      <img src={image} alt='' />
      <p>Drag and Drop your image here</p>
    </div>
    <p>or</p>
    <label id={style.upload}>Choose a file<input type='file' accept='image/*' onChange={dropHandler} /></label>
  </>
}
