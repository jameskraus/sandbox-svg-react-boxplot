import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'

const data = [
  { x: 0, y: 5 },
  { x: 2, y: 8 },
  { x: 4, y: 7 },
  { x: 5, y: 8 },
  { x: 6, y: 9 },
]

const App = ({ data }) => {
  return (
    <svg viewBox="0 0 10 10">
      {data.map(({ x, y }) => <circle cx={x} cy={y} r="0.25" />)}
    </svg>
  )
}

ReactDOM.render(<App data={data} />, document.getElementById('root'))
