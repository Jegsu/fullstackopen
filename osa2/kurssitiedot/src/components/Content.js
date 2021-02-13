import React from 'react'

const Content = ({ content }) => (
    <>
        {content.map(parts => (
            <p key={parts.name}>
                {parts.name} {parts.exercises}
            </p>
        ))}
    </>
)
export default Content