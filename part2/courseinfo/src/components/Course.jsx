import React from 'react'
import Content from './Content'
import Header from './Header'
import Total from './Total';

const Course = ({course}) => {
  return (
    <>
      <Header header={course.name} />
      <Content content={course.parts} />
      <Total total={course.parts}/>
    </>
  )
}

export default Course