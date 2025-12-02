import React, { useState } from "react";
import "../styles/Builder.css";

import {
  Menu,
  CircleUser,
  Moon,
  Sun,
  Box,
  Code,
  Database,
  ServerCog,
  ChevronDown,
  Layers,
} from "lucide-react";

function Builder() {
  const [darkTheme, setDarkTheme] = useState(true);
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className={`builder-body ${darkTheme ? "" : "light"}`}>
      {/* Navbar */}
      <header>
        <nav className="navbar-body" aria-label="Main navigation">
          {/* Left: Menu Toggle */}
          <button
            className="left-nav-section icon-button"
            onClick={() => setOpenMenu(!openMenu)}
            aria-expanded={openMenu}
            aria-label="Toggle menu"
          >
            <Menu
              size={40}
              strokeWidth={1}
              color={darkTheme ? "#ccc" : "#000"}
            />
          </button>

          {/* Middle: Logo */}
          <h1
            className="mid-nav-section projectInputHeading"
            style={{ userSelect: "none" }}
          >
            <span className="first">boot</span>
            <span className="second" style={{ color: "#6ab33f" }}>
              <i>gen</i>
            </span>
          </h1>

          {/* Right: Theme Switch + User */}
          <div className="right-nav-section">
            <button
              onClick={() => setDarkTheme(!darkTheme)}
              aria-label="Toggle dark mode"
              className="icon-button"
            >
              {darkTheme ? (
                <Sun size={40} strokeWidth={1} color="#ccc" />
              ) : (
                <Moon size={40} strokeWidth={1} color="#000" />
              )}
            </button>

            <button aria-label="User profile" className="icon-button">
              <CircleUser
                size={40}
                strokeWidth={1}
                color={darkTheme ? "#ccc" : "#000"}
              />
            </button>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="main-body">
        <section
          className="project-builder-body part-body"
          aria-label="Project Builder"
        >
          <form className="init-project-builder">
            <header className="init-project-builder-header">
              <Box
                size={28}
                strokeWidth={1}
                color={darkTheme ? "#ccc" : "#000"}
              />
              <h2>Project Setup</h2>
            </header>
            <section className="section1-init-project-builder">
              <div className="project-builder-drop">
                <h3 className="drop-head-3">Project</h3>
                <select
                  name="project"
                  id="project"
                  className="init-project-drop"
                >
                  <option value="maven">Maven</option>
                  <option value="groovy">Gradle-Groovy</option>
                  <option value="groovy">Gradle-Kotlin</option>
                </select>
              </div>
              <div className="project-builder-drop">
                <h3 className="drop-head-3">Language</h3>
                <select
                  name="project"
                  id="project"
                  className="init-project-drop"
                >
                  <option value="java">Java</option>
                  <option value="groovy">Groovy</option>
                  <option value="groovy">Kotlin</option>
                </select>
              </div>
              <div className="project-builder-drop">
                <h3 className="drop-head-3">Springboot</h3>
                <select
                  name="project"
                  id="project"
                  className="init-project-drop"
                >
                  <option value="3.4.12">3.4.12</option>
                  <option value="3.4.13">{"3.4.13 (Snapshot)"}</option>
                  <option value="3.5.8">3.5.8</option>
                  <option value="3.5.9">{"3.5.9 (Snapshot)"}</option>
                  <option value="4.0.0" selected>
                    4.0.0
                  </option>
                  <option value="4.0.1">{"4.0.1 (Snapshot)"}</option>
                </select>
              </div>
            </section>
            <header className="init-project-builder-header">
              <Code
                size={28}
                strokeWidth={1}
                color={darkTheme ? "#ccc" : "#000"}
              />
              <h2>Project Metadata</h2>
            </header>
            <section className="section2-init-project-builder">
              <label htmlFor="group">Group</label>
              <input type="text" value={"com.example"} />
              <label htmlFor="group">Artifact</label>
              <input type="text" value={"demo"} />
              <label htmlFor="group">Name</label>
              <input type="text" value={"demo"} />
              <label htmlFor="group">Package</label>
              <input type="text" value={"com.example.demo"} />
              <label htmlFor="group">Description</label>
              <input type="text" value={"Demo project for springboot"} />
            </section>
          </form>
          <aside className="dependency-section">
            <header className="dependency-section-header">
              <h2>Dependency</h2>
              <button className="dependency-add-btn">Add +</button>
            </header>
          </aside>
        </section>
        <section
          className="database-builder-body part-body"
          aria-label="Database Builder"
        >
          <div className="db-build-meta-init">
            <header className="db-build-meta-header">
              <Database
                size={28}
                strokeWidth={1}
                color={darkTheme ? "#ccc" : "#000"}
              />
              <h2>About Database</h2>
            </header>
            <form className="db-build-meta-input">
              <label
                htmlFor=""
                className="db-build-meta-label"
                id="build-label1"
              >
                Host
              </label>
              <input
                type="text"
                className="build-input-meta-host"
                value="localhost"
              />

              <label
                htmlFor=""
                className="db-build-meta-label"
                id="build-label2"
              >
                Port
              </label>
              <input
                type="text"
                className="build-input-meta-port"
                value="5432"
              />

              <label
                htmlFor=""
                className="db-build-meta-label"
                id="build-label3"
              >
                Name
              </label>
              <input
                type="text"
                className="build-input-meta-name"
                value="sample_db"
              />

              <label
                htmlFor=""
                className="db-build-meta-label"
                id="build-label4"
              >
                Username
              </label>
              <input
                type="text"
                className="build-input-meta-username"
                value="root"
                title="If you dont edit then this data will be used as placeholder for privacy"
              />

              <label
                htmlFor=""
                className="db-build-meta-label"
                id="build-label5"
              >
                Password
              </label>
              <input
                type="text"
                className="build-input-meta-password"
                value="root"
                title="If you dont edit then this data will be used as placeholder for privacy"
              />
            </form>
          </div>
          <div className="db-build-prefrence">
            <header className="db-prefrence-header">
              <ServerCog
                size={28}
                strokeWidth={1}
                color={darkTheme ? "#ccc" : "#000"}
              />
              <h2>Database Setup</h2>
            </header>
            <div className="db-build-pref-wrapper">
                <button style={{ color: darkTheme ? "#ccc" : "#000" }} className="db-build-pref-opt db-build-pref-1"><span>Choose Database</span><ChevronDown /></button>
                <button style={{ color: darkTheme ? "#ccc" : "#000" }} className="db-build-pref-opt db-build-pref-2"><span>Choose Access Style</span><ChevronDown /></button>
                <button style={{ color: darkTheme ? "#ccc" : "#000" }} className="db-build-pref-opt db-build-pref-3"><span>Choose Schema Behaviour</span><ChevronDown /></button>
                <button style={{ color: darkTheme ? "#ccc" : "#000" }} className="db-build-pref-opt db-build-pref-4"><span>Choose Audit Prefrence</span><ChevronDown /></button>
            </div>
          </div>
        </section>
        <section
          className="entity-builder-body part-body"
          aria-label="Entity Builder"
        >
          <div className="entity-field-build-init">
            <header className="entity-build-header">
                <Layers                 
                size={28}
                strokeWidth={1}
                color={darkTheme ? "#ccc" : "#000"}/>
                <h2>Entity Builder</h2>
            </header>
          </div>
          <div className="entity-field-list"></div>
        </section>
      </main>
    </div>
  );
}

export default Builder;
