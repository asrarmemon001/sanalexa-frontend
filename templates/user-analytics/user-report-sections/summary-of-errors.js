import React from "react";
import {
  FormControl,
  MenuItem,
  Select,
} from "@mui/material";

const SummaryOfErrors = ({ IterationDropDown,handleSummaryErrorAPI,defaultIterationValue, userProjectReportSummeryError }) => {

 const data = userProjectReportSummeryError

  return (
    <div className="col-md-6">
      <div className="card my-4">
        <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
          <div className="bg-primary px-3 shadow-primary border-radius-lg pt-4 pb-3">
            <div className="row">
              <div className="col-12">
                <h6 className="text-white text-capitalize px-3 d-flex align-items-center">
                  <div className="pe-3" style={{ whiteSpace: "nowrap" }}>
                    {" "}
                    Summary Of Errors
                  </div>
                  <div className="text-end w-100 d-flex justify-content-end">
                    <FormControl
                      fullWidth
                      className="text-start"
                      size="small"
                      style={{ maxWidth: 300 }}
                    >
                      {/* <InputLabel id="select-sector-label">Select Itration</InputLabel> */}
                      <Select
                        labelId="itration-of-label"
                        id="itration-of-label"
                        className="drop-down"
                        // label="Itration"
                        value={IterationDropDown?.[IterationDropDown.length - 1]?.id ? IterationDropDown?.[IterationDropDown.length - 1]?.id :""}
                        name="itration"
                        onChange={(e)=>handleSummaryErrorAPI(e?.target?.value)}
                        style={{ width: "auto" }}
                        displayEmpty
                        inputProps={{ "aria-label": "Without Label" }}
                      >
                        {IterationDropDown?.map((el) => {
                          return (
                            <MenuItem key={el.id} value={el.id}>
                              {el.name}
                            </MenuItem>
                          );
                        })}
                      </Select>
                    </FormControl>
                  </div>
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className="card-body px-4 pb-2">
          <div
            className="table-responsive p-0 text-center"
            style={{ height: 200 }}
          >
            <table className="table align-items-center mb-0">
              <thead>
                <tr>
                  <th className="text-uppercase text-secondary text-xs font-weight-bolder opacity-7 text-start">
                    #
                  </th>
                  <th className="text-uppercase text-secondary text-xs font-weight-bolder opacity-7 ps-2">
                    Step
                  </th>
                  <th className="text-center text-uppercase text-secondary text-xs font-weight-bolder opacity-7">
                    Description
                  </th>
                  <th className="text-center text-uppercase text-secondary text-xs font-weight-bolder opacity-7">
                    Status{" "}
                  </th>
                </tr>
              </thead>
              <tbody>
                  {
                    data?.map((i,index)=>(
                <tr key={index}>     
                  <td>
                    <div className="d-flex px-3 py-1 text-start">{index}</div>
                  </td>
                  <td>
                    <p className="text-sm font-weight-bold mb-0">
                      {i.title}
                    </p>
                  </td>
                  <td className="align-middle text-center text-sm">
                    <p className="text-sm font-weight-bold mb-0">
                      {i.taskDesc}
                    </p>
                  </td>
                  <td className="align-middle text-center">
                    <p className="text-sm font-weight-bold mb-0">
                      <span className="badge bg-warning">{i.status}</span>
                    </p>
                  </td>
                </tr>
                    ))
                  }
              </tbody>
            </table>
          </div>
        </div>
        <div className="card-footer border-top">
          <span className="text-bolder">Note:</span> This chart measures the
          iterative and comprehensive summary of the errors
        </div>
      </div>
    </div>
  );
};
export default SummaryOfErrors;
