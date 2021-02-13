import React from 'react'

const Notification = ({ message }) => {
  if (message === null) {
    return null
  }

  if (message.success) {
    return (
      <div className="success">
        {message.success}
      </div>
    )
  }

  if (message.error) {
    return (
      <div className="error">
        {message.error}
      </div>
    )
  }
}

export default Notification