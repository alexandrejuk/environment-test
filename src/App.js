import React from 'react'

function App() {
  return (
    <h1>
      {process && process.env.REACT_APP_MY_NAME}
    </h1>
  )
}

export default App
