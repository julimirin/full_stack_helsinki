// Importamos el hook useState desde React para gestionar el estado local.
import { useState } from 'react'
import Button from './Button.jsx'
import StatisticLine from './StatisticLine.jsx'

const App = () => {
  // Definimos tres contadores independientes con su estado inicial: good, neutral y bad.
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // Calculamos valores derivados en vez de guardarlos en el estado.
  const total = good + neutral + bad
  const average = total === 0 ? 0 : (good * 1 + neutral * 0 + bad * -1) / total
  const positive = total === 0 ? 0 : (good / total) * 100

  // Funciones que actualizan el estado cuando se pulsa cada botón.
  const increaseGood = () => setGood(good + 1)
  const increaseNeutral = () => setNeutral(neutral + 1)
  const increaseBad = () => setBad(bad + 1)

  return (
    <div>
      {/* Botones que llaman a los manejadores correspondientes */}
      <h1>Give Feedback</h1>
      <Button handleClick={increaseGood} text="good" />
      <Button handleClick={increaseNeutral} text="neutral" />
      <Button handleClick={increaseBad} text="bad" />

      {/* Mostramos los valores actuales de cada contador */}
      <div>
        <h1>Statics</h1>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>total {total}</p>
        <StatisticLine label="average" value={average.toFixed(2)} />
        <p>positive {positive.toFixed(2)}%</p>
      </div>
    </div>
  )
}

// Exportamos el componente principal para que pueda ser usado en main.jsx.
export default App