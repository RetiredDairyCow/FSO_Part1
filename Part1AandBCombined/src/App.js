import React from 'react'

const Part = (props) => 
{
  return (
    <div>
      {props.courseparts.map(element => (
        <p>{element.name} No. of exercices = {element.exercises}</p> 
      ))}
     </div> 
  )
}   

const Course = (props) => 
{
  console.log(props.course)
  return (
      <Header key={props.course.id} name={props.course.courseName}/>
  )
}
    
    
const Header = (props) => 
{
  return (
    <div>
      <p>{props.name}</p>
    </div>
  )
}

const Content = (props) =>
{
  return (
    <div>
      <Part courseparts={props.course}/>
    </div>
  )
}

const Total = (props) =>
{
  return (
    <div>Total = {props.course.reduce((prev, next) => prev + next.exercises, 0)}</div>
  )
}

const App = () => {
  
  const course = { 
    id: 1,
    courseName : 'Half Stack application development',
    parts : [
    {
      id: 1,
      name :'Fundamentals of REACT',
      exercises : 10
    },
    {
      id: 2,
      name : 'Using props to pass data',
      exercises : 7
    },
    {
      id:3,
      name :'State of a component',
      exercises : 14
    }
  ]
  }
   return (
    <div>
      <Header course={course.courseName}/>
      <Content course={course.parts}/>
      <Total course={course.parts}/>

    </div>
  ) 
}

export default App