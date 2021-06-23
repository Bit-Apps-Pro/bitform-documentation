import React from 'react'
export default function Image({ src, w, h, alt }) { return <img className="doc-img" loading="lazy" src={`/img/${src}.png`} width={w} height={h} alt={alt} /> }
