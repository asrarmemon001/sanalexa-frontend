import React from "react"
export const NoDataFound = ({ message, error }) => {
    return (
      <div className={`no_data pt-4 pb-4 text-center w-100 ${error ? `text-danger` : ``}`}>
        <img src={"/static/images/no-data.png"} className="img-fluid" />
        <span className="d-block pt-3 font-weight-400 ps-4 mb-3">{message || "No data found." }</span>
      </div>
    );
  };
  