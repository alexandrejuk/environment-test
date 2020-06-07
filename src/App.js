import React from 'react'

function App() {
  return (
    <div>
      {process && process.env.REACT_APP_MY_NAME}
    </div>
  )
}

export default App
