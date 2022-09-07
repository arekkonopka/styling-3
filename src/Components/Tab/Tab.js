import React from 'react'

const Tab = ({ active, number }) => {
  return (
    <div className={`tab ${active && '-active'}`}>
      <div className={`tab__number ${active && '-active'}`}>{number}</div>
      <div className={`tab__dot ${active && '-active'}`}></div>
    </div>
  )
}

export default Tab
