import React from 'react'
import ReactDOM from 'react-dom'
import * as d3 from 'd3'
import './style.css'

const data = [
  { x: 0, y: 5 },
  { x: 2, y: 8 },
  { x: 4, y: 7 },
  { x: 5, y: 8 },
  { x: 6, y: 9 },
]

const App = ({ data }) => {
  const [xMin, xMax] = d3.extent(data.map(_ => _.x))
  const [yMin, yMax] = d3.extent(data.map(_ => _.y))

  const xScale = d3
    .scaleLinear()
    .domain([xMin, xMax])
    .range([0, 10])

  const yScale = d3
    .scaleLinear()
    .domain([yMin, yMax])
    .range([10, 0])

  const transformedData = data.map(({ x, y }) => ({
    x: xScale(x),
    y: yScale(y),
  }))

  return (
    <svg viewBox="0 0 10 10">
      {transformedData.map(({ x, y }) => <circle cx={x} cy={y} r="0.25" />)}
    </svg>
  )
}

ReactDOM.render(<App data={data} />, document.getElementById('root'))
