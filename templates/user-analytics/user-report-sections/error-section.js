import React from "react"
const ErrorSection = ({avgError,finalErrorResult}) => {
    return (
        <div className="col-md-3">
            <div className="card my-4">
                <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                    <div className="bg-danger px-3 shadow-primary border-radius-lg pt-4 pb-3">
                        <div className="row">
                            <div className="col-12">
                                <h6 className="text-white text-capitalize ps-3">Error</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-body px-4 pb-2">
                    <p className="mb-0">Average errors (across iterations) : <span className="text-bolder">{avgError}</span></p>
                    <hr />
                    <p className="mb-0">Reduction in errors (from first to till last iteration) : <span className="text-bolder">{finalErrorResult}%</span></p>
                </div>
            </div>
        </div>
    )
}
export default ErrorSection
