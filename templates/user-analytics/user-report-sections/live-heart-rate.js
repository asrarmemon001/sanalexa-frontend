import React from "react"
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
const LiveHeartRate = () => {

    const data = [
        {
            heartRate: 85,
            time: 20
        },
        {
            heartRate: 80,
            time: 20
        },
        {
            heartRate: 90,
            time: 20
        },
        {
            heartRate: 70,
            time: 20
        },
        {
            heartRate: 95,
            time: 20
        },       {
            heartRate: 85,
            time: 20
        },
        {
            heartRate: 80,
            time: 20
        },
        {
            heartRate: 90,
            time: 20
        },
        {
            heartRate: 70,
            time: 20
        },
        {
            heartRate: 95,
            time: 20
        },
        {
            heartRate: 85,
            time: 20
        },
        {
            heartRate: 80,
            time: 20
        },
        {
            heartRate: 90,
            time: 20
        },
        {
            heartRate: 70,
            time: 20
        },
        {
            heartRate: 95,
            time: 20
        },
        {
            heartRate: 85,
            time: 20
        },
        {
            heartRate: 80,
            time: 20
        },
        {
            heartRate: 90,
            time: 20
        },
        {
            heartRate: 70,
            time: 20
        },
        {
            heartRate: 95,
            time: 20
        },
        {
            heartRate: 85,
            time: 20
        },
        {
            heartRate: 80,
            time: 20
        },
        {
            heartRate: 90,
            time: 20
        },
        {
            heartRate: 70,
            time: 20
        },
        {
            heartRate: 95,
            time: 20
        },
        {
            heartRate: 85,
            time: 20
        },
        {
            heartRate: 80,
            time: 20
        },
        {
            heartRate: 90,
            time: 20
        },
        {
            heartRate: 70,
            time: 20
        },
        {
            heartRate: 95,
            time: 20
        },
    ];

    return (
        <div className="col-md-12">
            <div className="card my-4">
                <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                    <div className="bg-primary px-3 shadow-primary border-radius-lg pt-4 pb-3">
                        <div className="row">
                            <div className="col-12">
                                <h6 className="text-white text-capitalize px-3 d-flex align-items-center">
                                    Live heart rate
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
                            data={data}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            {/* <XAxis dataKey="time" /> */}
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line
                                type="linear"
                                dataKey="heartRate"
                                stroke="#8214d8"
                            // activeDot={{ r: 8 }}
                            />

                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className="card-footer border-top">
                    <span className="text-bolder">Note:</span> This chart measures the iterative and comprehensive summary of the errors
                </div>
            </div>
        </div>
    )
}
export default LiveHeartRate
