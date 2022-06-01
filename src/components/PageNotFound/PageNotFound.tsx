import "./page-not-found.css";
import React from "react";

export const PageNotFound: React.FC = () => {
  return (
    <div className="not-found-wrapper">
      <span>404</span>
      <span className="error-message">Incorrect search request, please try another one</span>
    </div>
  );
};
