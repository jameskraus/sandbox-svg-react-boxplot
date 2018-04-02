import React from 'react'
import ReactDOM from 'react-dom'
import * as d3 from 'd3'
import './style.css'

const data = [1, 2, 3, 10, 4, 5, 6]

const App = ({ data }) => {
  // One unit less than the min/max coordinates on our graph
  const minXPos = 1
  const maxXPos = 9

  const totalWidth = maxXPos - minXPos
  const widthPerElement = totalWidth / (data.length * 2 - 1)

  // Scale input domain from 0 to the max value in the data set
  // to an input range of 0, 8 (for some padding)
  const scaleValue = d3
    .scaleLinear()
    .domain([0, Math.max(...data)])
    .range([0, 8])

  // Takes the index of the item in our data array and
  // returns the position of the top-left point
  const scalePosition = d3
    .scaleLinear()
    .domain([0, data.length - 1])
    // Uses widthPerElement to offset the top-left point
    // by however wide our box happens to be. So as long
    // as the last box has width = widthPerElement, then
    // it will just touch the maxXPos
    .range([minXPos, maxXPos - widthPerElement])

  const boxes = data.map((value, i) => {
    const xPos = scalePosition(i)
    const height = scaleValue(value)
    const yPos = 0
    return {
      xPos,
      yPos,
      height,
    }
  })

  return (
    <svg viewBox="0 0 10 10">
      {boxes.map(({ xPos, yPos, height }) => (
        <rect
          x={xPos}
          y={yPos}
          width={widthPerElement}
          height={height}
          r="0.25"
        />
      ))}
    </svg>
  )
}

ReactDOM.render(<App data={data} />, document.getElementById('root'))
