import { useState } from 'react'
import Login  from './pages/login'
import GlobalStyle from './style/GlobalStyle'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <GlobalStyle/>
    <Login/>
    </>
  )
}

export default App;