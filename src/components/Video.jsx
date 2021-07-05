import React from 'react'
import 'lite-youtube-embed/src/lite-yt-embed.js'
import 'lite-youtube-embed/src/lite-yt-embed.css'
export default function Video({ src, w, h, alt, youtube }) {
    if (youtube) {
        return <lite-youtube class="youtube-vdo" videoid={src} />
    }

    return (
        <video width={w} height={h} controls>
            <source src={`/video/${src}.mp4`} type="video/mp4" />
        </video>
    )
}
