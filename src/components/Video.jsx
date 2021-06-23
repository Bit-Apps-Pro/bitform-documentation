import React from 'react'
export default function Video({ src, w, h, alt }) {
    return (
        <video width={w} height={h} controls>
            <source src={`../static/video/${src}.mp4`} type="video/mp4" />
        </video>
    )
}
