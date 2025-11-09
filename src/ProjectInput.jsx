import React from "react";
import ProjectForm from "./components/ProjectForm";
import DependencySelector from "./components/DependencySelector";
// import ProjectForm from "../components/ProjectForm";

function ProjectInput() {
  return (
    <>
      <div className="projectInputBody">
        <header className="projectInputHeader">
          <h1
            className="projectInputHeading"
            style={{
              borderBottom: "1px solid #ccc",
              padding: "10px 20px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <span className="first">boot</span>
            <span className="second" style={{ color: "green" }}>
              <i>gen</i>
            </span>
          </h1>
        </header>
        <main
          className="projectInputMain"
          style={{
            width: "100%",
            height: "32em",
            border: "1px solid #ccc",
            padding: "10px 20px",
            display: "grid",
            gridTemplateColumns: "3fr 2fr",
          }}
        >
          <ProjectForm />
          <DependencySelector/>
        </main>
      </div>
    </>
  );
}

export default ProjectInput;
