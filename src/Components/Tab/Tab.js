import React from 'react'

const Tab = ({ isActive, number }) => {
  return (
    <div className={`tab ${isActive ? '-active' : ''}`}>
      <div className={`tab__number ${isActive ? '-active' : ''}`}>{number}</div>
      <div className={`tab__dot ${isActive ? '-active' : ''}`}></div>
    </div>
  )
}

export default Tab
