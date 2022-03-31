import React from 'react'
export default function UnsatisfiedEmoji({ rating, feedBack }) {
  return (
    <span className='emoji'>
      <svg xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        onClick={() => feedBack('disappointed')}
        className={rating === 'disappointed' ? 'emojiIcon activeEmoji' : 'emojiIcon'}
        width="30"
        height="30"
      >
        <g fill="none"><path d="M12 2.004c5.523 0 10 4.477 10 10s-4.477 10-10 10s-10-4.477-10-10s4.477-10 10-10zm0 11.493A5.985 5.985 0 0 0 7.712 15.3a.75.75 0 1 0 1.071 1.05A4.485 4.485 0 0 1 12 14.996c1.225 0 2.37.49 3.211 1.347a.75.75 0 1 0 1.07-1.051A5.984 5.984 0 0 0 12 13.497zM8.219 6.664L8.127 6.6A.75.75 0 0 0 7.2 7.759l.081.076l1.257 1.004a1.25 1.25 0 1 0 1.712 1.16a.749.749 0 0 0 .55-1.26l-.082-.075l-2.5-2l-.091-.063l.092.063zm8.617.117a.75.75 0 0 0-.963-.18l-.092.063l-2.498 2l-.082.075a.75.75 0 0 0 .44 1.251l.11.008a1.25 1.25 0 1 0 1.825-1.108l-.113-.051l1.256-1.004l.081-.076a.75.75 0 0 0 .035-.978z" fill="currentColor"></path>
        </g>
      </svg>
      <span className={rating === 'disappointed' ? 'emojiTitle emojiTitleActive' : 'emojiTitle'}>Disappointed</span>
    </span>
  )
}