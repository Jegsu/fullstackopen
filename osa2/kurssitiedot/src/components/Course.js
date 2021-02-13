import React from 'react'
import Content from './Content'
import Header from './Header'
import Total from './Total'

const Course = ({ courses }) => (
    <>
        {courses.map(course => (
            <div key={course.id}>
                <Header title={course.name} />
                <Content content={course.parts} />
                <Total total={course.parts} />
            </div>
        ))}
    </>
)


export default Course