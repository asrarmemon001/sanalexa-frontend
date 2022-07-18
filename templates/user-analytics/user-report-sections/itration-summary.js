import { FormControl, Select, MenuItem } from "@mui/material";
import React from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { dashboardActions } from "../../../utils/constants/dashboard-actions";
const ItrationSummary = ({ IterationDropDown,handleIterationSummary, _userProjectReportSummery }) => {
 

  const scatterData = _userProjectReportSummery?.map((i,index)=>{
    if(index % 3 == 0) {
      return {name:i.name, value:i.value}
    }
    
    // if the number is odd
    else {
    return {names:i.name, value:i.value}
      
  }
  })
  console.log(scatterData)

  const data = [
    {
      value: 85,
      iteration: "iteration 1",
    },
    {
      value: 80,
      iteration: "iteration 2",
    },
    {
      value: 90,
      iteration: "iteration 3",
    },
    {
      value: 70,
      iteration: "iteration 4",
    },
    {
      value: 95,
      iteration: "iteration 5",
    },
    {
      value: 85,
      iteration: "iteration 6",
    },
    {
      value: 80,
      iteration: "iteration 7",
    },
    {
      value: 90,
      iteration: "iteration 8",
    },
    {
      value: 70,
      iteration: "iteration 9",
    },
    {
      value: 95,
      iteration: "iteration 10",
    },
    {
      value: 85,
      iteration: "iteration 11",
    },
    {
      value: 80,
      iteration: "iteration 12",
    },
    {
      value: 90,
      iteration: "iteration 13",
    },
    {
      value: 70,
      iteration: "iteration 14",
    },
    {
      value: 95,
      iteration: "iteration 15",
    },
    {
      value: 85,
      iteration: "iteration 16",
    },
    {
      value: 80,
      iteration: "iteration 17",
    },
    {
      value: 90,
      iteration: "iteration 18",
    },
    {
      value: 70,
      iteration: "iteration 19",
    },
    {
      value: 95,
      iteration: "iteration 20",
    },
    {
      value: 85,
      iteration: "iteration 21",
    },
    {
      value: 80,
      iteration: "iteration 22",
    },
    {
      value: 90,
      iteration: "iteration 23",
    },
    {
      value: 70,
      iteration: "iteration 24",
    },
    {
      value: 95,
      iteration: "iteration 25",
    },
    {
      value: 85,
      iteration: "iteration 26",
    },
    {
      value: 80,
      iteration: "iteration 27",
    },
    {
      value: 90,
      iteration: "iteration 28",
    },
    {
      value: 70,
      iteration: "iteration 29",
    },
    {
      value: 95,
      iteration: "iteration 30",
    },
  ];
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
                    Iteration Summary
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
                        labelId="dashboard-actions-label"
                        id="dashboard-actions-label"
                        className="drop-down"
                        value={dashboardActions?.[0]?.id ? dashboardActions?.[0]?.id :""}
                        // label="dashboard"
                        name="dashboard-action"
                        onChange={(e)=>(handleIterationSummary(e.target.value))}
                        style={{ width: "auto" }}
                        displayEmpty
                        inputProps={{ "aria-label": "Without Label" }}
                      >
                        {dashboardActions.map((el) => {
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
        <div className="card-body px-0 pb-2">
          <ResponsiveContainer width={"100%"} height={350}>
            <LineChart
              width={500}
              height={350}
              data={scatterData}
              margin={{
                top: 5,
                right: 30,
                left: 0,
                bottom: 50,
              }}
            >
              {/* <Legend y={0}/> */}
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="name"
                interval={0}
                angle={-65}
                dy={25}
                dx={-15}
                fontSize={12}
                tickSize={4}
                tickLine={1}
              />
              <YAxis tickLine={0} interval={0} />
              <Tooltip />
              <Line
                type="linear"
                dataKey="value"
                stroke="#8214d8"
                // activeDot={{ r: 8 }}
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="card-footer border-top">
          <span className="text-bolder">Note:</span> Above is the pictorial
          representation of all the metrics accorss different iterations.
        </div>
      </div>
    </div>
  );
};
export default ItrationSummary;
