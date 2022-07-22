import { FormControl, Select, MenuItem } from "@mui/material";
import React from "react";

const AffectAssesment = ({ IterationDropDown }) => {
  return (
    <div className="col-md-6">
      <div className="card borderred my-4">
        <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
          <div className="bg-danger px-3 shadow-primary border-radiusus pt-4 pb-3">
            <div className="row">
              <div className="col-12">
                <h6 className="text-white text-capitalize px-3 d-flex align-items-center">
                  <div className="pe-3" style={{ whiteSpace: "nowrap" }}>
                    {" "}
                    Affect Assesment
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
                        labelId="itration-actions-label"
                        id="itration-actions-label"
                        className="drop-down"
                        // label="itration"
                        name="itration-action"
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
          <div style={{ height: 325 }}></div>
        </div>
        <div className="card-footer border-top">
          <span className="text-bolder">Note:</span> The above chart gives a
          comparative summary of a users feeling pre and post playing the
          module.
        </div>
      </div>
    </div>
  );
};
export default AffectAssesment;
