import React, { useState, useEffect } from "react";
import ProjectComponent from "./projectComponent";
function Portfolio() {
  const [projects, setProjects] = useState(null);
  let url = "http://localhost:8080/projects";
  let moi = "Je m'appelle Zach Je suis ton Pere";
  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(json => setProjects(json));
  }, [url]);

  return (
    <div className="portfolio-component">
      {projects === null
        ? "Chargement..."
        : projects.map(project => (
            <ProjectComponent car={project} pere={moi} />
          ))}
    </div>
  );
}

export default Portfolio;
