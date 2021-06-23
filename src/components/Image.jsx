import React from 'react'
export default function Image({ src, w, h, alt }) { return <img style={{marginTop:10,marginBottom:10,borderRadius:10}} src={`../static/img/${src}.png`} width={w} height={h} alt={alt} /> }
