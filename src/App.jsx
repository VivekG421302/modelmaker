import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProjectInput from './ProjectInput'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ProjectInput/>
    </>
  )
}

export default App
