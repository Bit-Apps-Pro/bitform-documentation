import React from "react"
export default function List({ type, children }) {
  return (
    <>
      <div className={`bdg ${type}`}>{type}</div>
      <ul>
        {children.map(list => list)}
      </ul>
    </>
  )
}
