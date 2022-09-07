import React from 'react'

const Card = ({ paragraph, header, long = false }) => {
  return (
    <div className={`card ${long && '-long'}`}>
      <div className="card__image"></div>
      <div className="card__body">
        <p className="card__paragraph">{paragraph}</p>
        <h2 className="card__header">{header}</h2>
      </div>
    </div>
  )
}

export default Card
