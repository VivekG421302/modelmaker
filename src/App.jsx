import { useState } from 'react'
import ProjectInput from './ProjectInput'
import Builder from './page/Builder'

function App() {
  const [page, setPage] = useState("builder")

  return (
    <>
      {/* Page Switcher */}
      <div style={{display: "flex", gap: "10px" }}>
        
        {/* Builder Button */}
        <button
          onClick={() => setPage("builder")}
          style={{
            padding: "2px 4px",
            borderRadius: "2px",
            background: page === "builder" ? "lime" : "#333",
            color: page === "builder" ? "#000" : "#fff",
            border: "none",
            cursor: "pointer"
          }}
        >
          Builder
        </button>

        {/* ProjectInput Button */}
        <button
          onClick={() => setPage("projectinput")}
          style={{
            padding: "2px 4px",
            borderRadius: "2px",
            background: page === "projectinput" ? "lime" : "#333",
            color: page === "projectinput" ? "#000" : "#fff",
            border: "none",
            cursor: "pointer"
          }}
        >
          Project Input
        </button>

      </div>

      {/* Render selected component */}
      {page === "builder" && <Builder />}
      {page === "projectinput" && <ProjectInput />}
    </>
  )
}

export default App;
