import React from 'react'
import { default as IImg } from '@theme/IdealImage'

export default function Image({ src, w, h, alt }) {
  if (process.env.NODE_ENV === 'development') {
    return <img className="doc-img" loading="lazy" src={`/img/${src}.png`} width={w} height={h} alt={alt} />
  }else{
    return <IImg className="doc-img" size={w} img={require(`../../static/img/${src}.png`)} />
  }
}
