import React, { useState } from 'react'
import Slider from './Slider'
import SidebarItem from './SidebarItem'
import { DEFAULT_OPTIONS } from './config'
import './App.css'

function App() {
  const [selectedOptionIndex, seSelectedOptionIndex] = useState(0)
  const [options, setOptions] = useState(DEFAULT_OPTIONS)
  const selectedOption = options[selectedOptionIndex]

  const handleSliderChange = ({ target }) => {
    setOptions((prevOpts) =>
      prevOpts.map((option, index) => {
        return index !== selectedOptionIndex
          ? option
          : { ...option, value: target.value }
      })
    )
  }

  const getImageStyle = () => {
    const filters = options.map(option => {
      return `${option.property}(${option.value}${option.unit})`
    })

    return { filter: filters.join(' ')}
  }

  return (
    <div className="container">
      <div className="main-image" style={getImageStyle()}/>
      <div className="sidebar">
        {options.map((option, index) => (
          <SidebarItem
            key={index}
            name={option.name}
            active={index === selectedOptionIndex}
            handleClick={() => seSelectedOptionIndex(index)}
          />
        ))}
      </div>
      <Slider
        min={selectedOption.range.min}
        max={selectedOption.range.max}
        value={selectedOption.value}
        handleChange={handleSliderChange}
      />
    </div>
  )
}

export default App
