import React from 'react'

const Service = ({ icon, title, active }) => {
  return (
    <div className="service">
      <div className={`service__icon ${active && '-active'}`}>{icon}</div>
      <p className="service__title">{title}</p>
    </div>
  )
}

export default Service
