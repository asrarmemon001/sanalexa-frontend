import { Button, FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import React from "react"
import { dashboardActions } from "../../../utils/constants/dashboard-actions"
const RelationalDataSummary = () => {
    return (
        <div className="col-md-12">
            <div className="card my-4">
                <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                    <div className="bg-primary px-3 shadow-primary border-radius-lg pt-4 pb-3">
                        <div className="row">
                            <div className="col-12">
                                <h6 className="text-white text-capitalize px-3 d-flex align-items-center">
                                    Relational Data Summary
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-body px-4 pb-2">
                    <div className="row">
                        <div className="col-12 mb-3">
                            <FormControl fullWidth className="text-start pe-3 mb-0" size="small" style={{ maxWidth: 400 }}>
                                <InputLabel id="select-sector-label">Value 1</InputLabel>
                                <Select
                                    labelId="dashboard-actions-label"
                                    id="dashboard-actions-label"
                                    // className="drop-down"
                                    label="Value 1"
                                    name="dashboard-action"
                                    style={{ width: 'auto' }}
                                    // displayEmpty
                                    // inputProps={{ "aria-label": "Without Label" }}
                                >
                                    {dashboardActions.map(el => {
                                        return <MenuItem key={el.id} value={el.id}>{el.name}</MenuItem>
                                    })}
                                </Select>
                            </FormControl>

                            <FormControl fullWidth className="text-start pe-3 mb-0" size="small" style={{ maxWidth: 400 }}>
                                <InputLabel id="select-sector-label">Value 2</InputLabel>
                                <Select
                                    labelId="dashboard-actions-label"
                                    id="dashboard-actions-label"
                                    // className="drop-down"
                                    label="Value 2"
                                    name="dashboard-action"
                                    style={{ width: 'auto' }}
                                    // displayEmpty
                                    // inputProps={{ "aria-label": "Without Label" }}
                                >
                                    {dashboardActions.map(el => {
                                        return <MenuItem key={el.id} value={el.id}>{el.name}</MenuItem>
                                    })}
                                </Select>
                            </FormControl>
                            <Button
                                variant="contained"
                                color="success" 
                                    style={{minWidth:150}}
                                // onClick={handleGoBtnClick}
                            >
                                Go
                            </Button>
                        </div>
                        <div className="" style={{minHeight:250}}>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default RelationalDataSummary
