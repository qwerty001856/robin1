import React from "react";
import "./WorkL.css";
// import a1 from "./Photos/a1.jpg";
import a2 from "./Photos/a2.jpg";
export default function Work(props) {
  return (
    <div className="cont">
      <div className="cont1">
        <div className="card l-bg">
            
          <div className="row g-0">
          <div className="col-md-4">
              <img
                src={a2}
                className="img-fluid rounded-start"
                alt="...error"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h1 className="card-title">{props.title}</h1>
                <p className="card-text">
                  <span>{props.para}</span>
                </p>
              </div>
              <button type="button" className="btn btn-outline-warning">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
