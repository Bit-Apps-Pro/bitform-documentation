import React from 'react'
import BrowserOnly from '@docusaurus/BrowserOnly';
export default function Video({ src, w, h, alt, youtube }) {
    return (
        <BrowserOnly>
            <LiteYoutube src={src} w={w} h={h} alt={alt} youtube={youtube} />
        </BrowserOnly>
    )
}

function LiteYoutube({ src, w, h, alt, youtube }) {
    if (youtube) {
        if (typeof window !== 'undefined') {
            return <lite-youtube class="youtube-vdo" videoid={src} />
        } else {
            return <></>
        }
    }

    return (
        <video preload="auto" /*  width={w} height={h} */ width="100%" autoPlay controls muted>
            <source src={`/video/${src}.mp4`} type="video/mp4" />
        </video>
    )
}
