import React, { useEffect, useState } from 'react'
import { default as IImg } from '@theme/IdealImage'

export default function Image({ src, w, h, alt }) {
  const [modal, setmodal] = useState(false)
  const handleModal = () => {
    setmodal(true)
  }
  useEffect(() => {
    window.addEventListener('keyup', (e) => {
      if (e.key === 'Escape') {
        setmodal(false)
      }
    })
  }, [])
  if (process.env.NODE_ENV === 'development') {
    return <div role="button" onClick={handleModal} onKeyPress={handleModal} tabIndex="0">
      {modal && <div className="img-backdrop" onMouseUp={() => setmodal(false)} onKeyPress={() => setmodal(false)} tabIndex="0" role="button" aria-label="image preview close" />}
      <img className={`doc-img ${modal ? 'zoom-in' : ''}`} loading="lazy" src={`/img/${src}.png`} width={w} height={h} alt={alt} />
    </div>
  } else {
    return <div role="button" onClick={handleModal} onKeyPress={handleModal} tabIndex="0">
      {modal && <div className="img-backdrop" onClick={() => setmodal(false)} onKeyPress={() => setmodal(false)} tabIndex="0" role="button" aria-label="image preview close" />}
      <IImg className={`doc-img ${modal ? 'zoom-in' : ''}`} size={w} img={require(`../../static/img/${src}.png`)} />
    </div>
  }
}
