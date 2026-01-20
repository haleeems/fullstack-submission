import React from 'react'

const Notification = ({message, success}) => {

  if (message === null) return null

  // const success = su

  const notifStyle = {
    background: 'lightgrey',
    color: success ? 'green' : 'red',
    borderStyle: 'solid',
    borderColor: success ? 'green' : 'red',
    marginBottom: '10px',
    padding: '10px',
    borderStyle: 'solid',
    borderRadius: '5px',
    fontSize: '1.5rem'
  }

  return (
    <div style={notifStyle}>
      {message}
    </div>
  )
}

export default Notification