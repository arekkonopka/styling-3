import React from 'react'

const Card = ({ paragraph, header, islong = false }) => {
  return (
    <div className={`card ${islong ? '-long' : ''}`}>
      <div className={`card__image ${islong ? '-long' : ''}`}></div>
      <div className="card__body">
        <p className="card__kicker">{paragraph}</p>
        <h2 className="card__header">{header}</h2>
      </div>
    </div>
  )
}

export default Card
