import React from "react"
const ErrorOfTimeTaken = () => {
    return (
        <div className="col-md-6">
            <div className="card borderred my-4">
                <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                    <div className="bg-danger px-3 shadow-danger border-radiusus pt-4 pb-3">
                        <div className="row">
                            <div className="col-12">
                                <h6 className="text-white text-capitalize px-3">
                                    # Error and Time taken (By Iteration)
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-body px-4 pb-2">
                    <div className="table-responsive p-0 text-center" style={{ height: 200 }}>

                    </div>
                </div>
                <div className="card-footer border-top">
                    <span className="text-bolder">Note:</span> This chart measures the users error and time performance over different iterations.
                </div>
            </div>
        </div>
    )
}
export default ErrorOfTimeTaken
