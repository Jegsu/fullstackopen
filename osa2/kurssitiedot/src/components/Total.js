import React from 'react'

const Total = ({ total }) => {

    const totalExercises = total.reduce((x, y) => x + y.exercises, 0)

    return (
        <p style={{ fontWeight: 'bold' }}>total of {totalExercises} exercises</p>
    )
}

export default Total