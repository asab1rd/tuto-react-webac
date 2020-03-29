import React from "react";

function projectComponent(props) {
  return (
    <div className="project-container">
      <div className="title">
        <h3> {props.car.name} </h3>
      </div>
      <div className="project-desc">
        <p>{props.car.description}</p>
      </div>
      <div className="project-image">
        <img src={props.car.img} alt="" />
      </div>
    </div>
  );
}

export default projectComponent;
