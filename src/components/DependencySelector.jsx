import React, { useState } from "react";
import "./DependencySelector.css";
import DEPENDENCY_CATALOG from "../data/dependencies.js";

const CATALOG = DEPENDENCY_CATALOG;
const TYPES = [...new Set(CATALOG.map((dep) => dep.type))];

export default function DependencySelector({ selected = [], onChange }) {
  const [selectedDeps, setSelectedDeps] = useState(selected);
  const [query, setQuery] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [tempResults, setTempResults] = useState([]);

  // Variable to store JSON for API use
  const selectedDepsJSON = JSON.stringify(selectedDeps);

  const handleSelectChange = (e) => {
    const type = e.target.value;
    setSelectedType(type);
    if (type) {
      setTempResults(CATALOG.filter((d) => d.type === type));
    } else {
      setTempResults([]);
    }
    setQuery("");
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      setTempResults(
        CATALOG.filter(
          (d) =>
            d.name.toLowerCase().includes(query.toLowerCase()) ||
            d.type.toLowerCase().includes(query.toLowerCase())
        )
      );
      setSelectedType("");
    }
  };

  const addDependency = (dep) => {
    if (!selectedDeps.find((d) => d.id === dep.id)) {
      const next = [...selectedDeps, dep];
      setSelectedDeps(next);
      onChange?.(next);

      // Reset search results so user returns to selected list
      setTempResults([]);
      setQuery("");
      setSelectedType("");
    }
  };

  const removeDependency = (dep) => {
    const next = selectedDeps.filter((d) => d.id !== dep.id);
    setSelectedDeps(next);
    onChange?.(next);
  };

  const isSelected = (dep) => selectedDeps.some((d) => d.id === dep.id);

  return (
    <div className="dependency-selector">
      <form className="top-row" onSubmit={handleSearchSubmit}>
        <select value={selectedType} onChange={handleSelectChange}>
          <option value="">Select Type</option>
          {TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Search dependencies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {/* Show selected dependencies */}
      <div className="selected-deps" style={{ maxHeight: "300px", overflowY: "auto" }}>
        {selectedDeps.map((dep) => (
          <div key={dep.id} className="dep-item-selected">
            <div className="selected-dep-text-wrapper">
              <div className="selected-dep-title">
                <h3 className="selected-dep-name">{dep.name}</h3>
                <span className="selected-dep-type">{dep.type}</span>
              </div>
              <p className="selected-dep-desc">{dep.description}</p>
            </div>
            <button className="btn remove" onClick={() => removeDependency(dep)}>
              -
            </button>
          </div>
        ))}
      </div>

      {/* Show search results */}
      {tempResults.length > 0 && (
        <div className="suggestions-overlay">
          {tempResults.map((dep) => (
            <div key={dep.id} className="dep-item overlay-item">
              <div>
                <strong className="dep-search-wrap">{dep.name}</strong>
                <span className="type">{dep.type}</span>
                <div className="desc">{dep.description}</div>
              </div>
              {isSelected(dep) ? (
                <button className="btn remove" onClick={() => removeDependency(dep)}>
                  -
                </button>
              ) : (
                <button className="btn add" onClick={() => addDependency(dep)}>
                  +
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
