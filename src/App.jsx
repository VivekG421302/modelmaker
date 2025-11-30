import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import ProjectInput from './ProjectInput'
import Builder from './page/Builder'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Builder/>
    {/* <ProjectInput/> */}
    </>
  )
}

export default App
