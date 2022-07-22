import React from "react";
const TimeSection = ({ imprInTimeEfficiency, AVGTimeTaken }) => {
  return (
    <div className="col-md-3">
      <div className="card borderred my-4">
        <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
          <div className="bg-success px-3 shadow-success border-radiusus pt-4 pb-3">
            <div className="row">
              <div className="col-12">
                <h6 className="text-white text-capitalize ps-3">Time</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="card-body px-4 pb-2">
          <p className="mb-0">
            Average time taken (across iterations) :{" "}
            <span className="text-danger">{AVGTimeTaken} Sec</span>
          </p>
          <hr />
          <p className="mb-0">
            Improvement in time efficiency (from first to till last iteration) :{" "}
            <span className="text-bolder">{imprInTimeEfficiency}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default TimeSection;
