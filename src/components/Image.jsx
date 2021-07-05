import React from 'react'
// import { default as Img } from '@theme/IdealImage'
export default function Image({ src, w, h, alt }) { return <img className="doc-img" loading="lazy" src={`/img/${src}.png`} width={w} height={h} alt={alt} /> }
// export default function Image({ src, w, h, alt }) { return <Img className="doc-img" img={`../../static/img/${src}.png`} /> }
