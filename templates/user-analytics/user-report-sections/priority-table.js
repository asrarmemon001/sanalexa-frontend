import React from "react";
import {
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

const PriorityTable = ({ IterationDropDown,handlePriorityAPI ,defaultIterationValue, PriorityTableData}) => {
  
 const performedSequence = PriorityTableData?.performedSequence
 const standardSequence = PriorityTableData?.standardSequence
 
  return (
    <div className="col-md-12">
      <div className="card borderred my-4">
        <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
          <div className="bg-danger px-3 shadow-danger border-radiusus pt-4 pb-3">
            <div className="row">
              <div className="col-12">
                <h6 className="text-white text-capitalize px-3 d-flex align-items-center">
                  <div className="pe-3" style={{ whiteSpace: "nowrap" }}>
                    {" "}
                    Priority Table
                  </div>
                  <div className="text-end w-100 d-flex justify-content-end">
                    <FormControl
                      fullWidth
                      className="text-start"
                      size="small"
                      style={{ width: 300 }}
                    >
                      {/* <InputLabel id="select-sector-label">Select Itration</InputLabel> */}
                      <Select
                        labelId="itration-of-label"
                        id="itration-of-label"
                        className="drop-down"
                        value={IterationDropDown?.[IterationDropDown.length - 1]?.id ? IterationDropDown?.[IterationDropDown.length - 1]?.id :""}
                        // label="Itration"
                        name="itration"
                        onChange={(e)=>handlePriorityAPI(e.target.value)}
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
          <div className="table-responsive p-0 text-center">
            <table className="table align-items-center mb-0">
              <thead>
                <tr>
                  <th className="text-uppercase text-secondary text-xs font-weight-bolder opacity-7 text-start">
                    Standard Sequence
                  </th>
                  <th className="text-uppercase text-secondary text-xs font-weight-bolder opacity-7 text-start">
                    Performed Sequence
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr >
                  {/* <div className="d-flex flex-column"> */}
                  <td>
                  {
                    standardSequence?.map((i)=>(
                     
                    <div className="d-flex flex-column px-3 py-1 text-start">
                      {i}
                    </div>
               
                    ))
                  }
                     </td>
                  {/* </div> */}
                  {/* <div  className="d-flex flex-column"> */}
                  <td>
                  {
                    performedSequence?.map((i)=>(
                    
                    <div className="d-flex flex-column px-3 py-1 text-start">
                      {i}
                    </div>
               
                    ))
                  }
                     </td>  
                  {/* </div> */}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="card-footer border-top">
          <span className="text-bolder">Note:</span> The above table gives the
          order in which the tasks were performed by the users.
        </div>
      </div>
    </div>
  );
};
export default PriorityTable;
