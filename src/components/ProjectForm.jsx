import React from "react";
import "./ProjectForm.css";

function ProjectForm() {
  return (
    <>
      <div className="projectFormBody">
        <h3>Project Setup</h3>
        <div className="projectFormSection1 projectFormSection">
          <div className="inputType projectFormSetupInput">
            <label htmlFor="">Project</label>
            <select name="projectType" id="type">
              <option value="maven">Maven</option>
              <option value="groovy">Gradle-Groovy</option>
              <option value="kotlin">Gradle-Kotlin</option>
            </select>
          </div>
          <div className="inputLanguage projectFormSetupInput">
            <label htmlFor="">Language</label>
            <select name="projectLanguage" id="lang">
              <option value="java">Java</option>
              <option value="kotlin">Kotlin</option>
              <option value="groovy">Groovy</option>
            </select>
          </div>
          <div className="inputVersion projectFormSetupInput">
            <label htmlFor="">Spring Boot</label>
            <select name="projectVersion" id="version">
              <option value="4.0.0">{`4.0.0 (SNAPSHOT)`}</option>
              <option value="RC2">{`4.0.0 (RC2)`}</option>
              <option value="3.5.8">{`3.5.8 (SNAPSHOT)`}</option>
              <option value="3.5.7">3.5.7</option>
              <option value="3.4.12">{`3.4.12 (SNAPSHOT)`}</option>
              <option value="3.4.11">{`3.4.11`}</option>
            </select>
          </div>
        </div>

        <div className="projectFormSection2 projectFormSection">
          <h3 style={{ gridColumn: " 1 / span 2", justifyContent: "start" }}>
            Project Metadata
          </h3>
          <label htmlFor="">Group</label>
          <input
            type="text"
            className="projectMetaInput"
            id="group"
            placeholder="com.example"
          />
          <label htmlFor="">Artifact</label>
          <input
            type="text"
            className="projectMetaInput"
            id="artifact"
            placeholder="demo"
          />
          <label htmlFor="">Name</label>
          <input
            type="text"
            className="projectMetaInput"
            id="name"
            placeholder="demo"
          />
          <label htmlFor="">Description</label>
          <input
            type="text"
            className="projectMetaInput"
            id="description"
            placeholder="Demo Project for springboot"
          />
          <label htmlFor="">Package Name</label>
          <input
            type="text"
            className="projectMetaInput"
            id="package"
            placeholder="com.example.demo"
          />
        </div>
      </div>
    </>
  );
}

export default ProjectForm;
