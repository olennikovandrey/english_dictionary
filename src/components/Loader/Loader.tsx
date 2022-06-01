import "./loader.css";
import React from "react";

export const Loader: React.FC = () => {
  return (
    <div className="d-flex justify-content-center mt250">
      <div className="spinner-border text-primary text-center" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};
