import React from 'react'

const Slider = ({ min, max, value, handleChange }) => {
  return (
    <div className="slider-container">
      <input
        min={min}
        max={max}
        type="range"
        value={value}
        className="slider"
        onChange={handleChange}
      />
    </div>
  )
}

export default Slider
