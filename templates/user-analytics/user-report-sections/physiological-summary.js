import React from "react";
const PhysiologicalSummary = ({
  maxTimeTakingTask,
  maxTaskError,
  lastintertion,
  last10intertion,
}) => {
  return (
    <div className="col-md-6">
      <div className="card borderred my-4">
        <div className="card-header  p-0 position-relative mt-n4 mx-3 z-index-2">
          <div className="bg-danger px-3 shadow-danger border-radiusus pt-4 pb-3">
            <div className="row">
              <div className="col-12">
                <h6 className="text-white text-capitalize ps-3">
                  Physiological Summary
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className="card-body px-4 pb-2">
          <p className="mb-0">
            A: Avg. HR recorded in latest iteration :{" "}
            <span className="text-danger">{lastintertion}</span>
          </p>
          <p className="mb-0">
            B: Avg. HR in latest 10 iterations played :{" "}
            <span className="text-success">{last10intertion}</span>
          </p>
          <hr />
          <p className="mb-0">
            A: Task with maximum time taken :{" "}
            <span className="text-bolder">{maxTimeTakingTask}</span>
          </p>
          <p className="mb-0">
            B: Task with maximum error :{" "}
            <span className="text-bolder">{maxTaskError}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default PhysiologicalSummary;
