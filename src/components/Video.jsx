import React from 'react'

Fexport default function Video({ src, w, h, alt, youtube }) {
    if (youtube) {
        if (typeof window !== 'undefined') {
            return <lite-youtube class="youtube-vdo" videoid={src} />
        } else {
            return <></>
        }
    }

    return (
        <video width={w} height={h} controls>
            <source src={`/video/${src}.mp4`} type="video/mp4" />
        </video>
    )
}
