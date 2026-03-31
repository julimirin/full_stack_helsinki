import Course from "./components/Course.jsx"

const App = () => {
  // Definimos un array de cursos con su información y sus partes
  const courses = [
    {
      header: 'Half Stack application development',
      content: 'A course that teaches React, props and state using a simple example.',
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
        },
        {
          name: 'State of a components',
          exercises: 14,
        },
      ],
    },
    {
      header: 'Advanced React patterns',
      content: 'A second course for deeper hooks and component design.',
      parts: [
        {
          name: 'Custom hooks',
          exercises: 12,
        },
        {
          name: 'Context API',
          exercises: 8,
        },
        {
          name: 'Performance optimization',
          exercises: 10,
        },
        {
          name: 'Tiki Taka',
          exercises: 10,
        },
      ],
    },
  ]

  return (
    // Renderizamos cada curso utilizando el componente Course y pasamos la información del curso como props
    <div>
      {courses.map((course) => {
        console.log("Mapeando curso: " + course.header + " con " + course.parts.length + " partes.")
        return <Course key={course.header} course={course} />
      })}
    </div>
  )
}

export default App


