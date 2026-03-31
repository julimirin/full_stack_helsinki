// Definimos el componente Header del curso
const Header = (props) => <h1>{props.course}</h1>

// Definimos el componente Content del curso
const Content = (props) => (
  <div>
    {props.parts.map((part) => (
      <Part key={part.name} part={part} />
    ))}
  </div>
)
// Definimos el componente Part del grupo
const Part = (props) => (
  <p>
    {props.part.name} {props.part.exercises}
  </p>
)
// Definimos el componente Total del curso
const Total = ({ parts }) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0)
  return <h2>Total of exercises: {total}</h2>
}

// Definimos el componente Course que representa un curso completo
const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.header} />
      <p>{course.content}</p>
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default Course