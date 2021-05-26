import React from 'react'
export default function Image({ src, w, h, alt }) { return <img src={`${src}.png`} width={w} height={h} alt={alt} /> }