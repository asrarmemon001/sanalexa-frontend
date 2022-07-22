import React, { useMemo, useState, useEffect } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Cell,
  Text,
} from "recharts";

let ctx;

export const measureText14HelveticaNeue = (text) => {
  if (!ctx) {
    ctx = document.createElement("canvas").getContext("2d");
    ctx.font = "14px 'Helvetica Neue";
  }

  return ctx.measureText(text).width;
};

const BAR_AXIS_SPACE = 10;

const BehaviourChart = ({ motivation, attitude, valueAndEthics }) => {
  const [motivationData, setMotivationData] = useState(0);
  const [attitudeData, setAttitudeData] = useState(0);
  const [valueAndEthicsData, setvalueAndEthicsData] = useState(0);
  useEffect(() => {
    setMotivationData(motivation);
    setAttitudeData(attitude);
    setvalueAndEthicsData(valueAndEthics);
  }, [motivation, attitude, valueAndEthics]);

  const data = [
    { name: "Motivation", value: motivationData || 0, color: "#8e5ea2" },
    { name: "Attitude", value: attitudeData || 0, color: "#59baa0" },
    {
      name: "Values and Ethics",
      value: valueAndEthicsData || 0,
      color: "#e8c3b9",
    },
  ];
  // const data = [
  //     { name: "Motivation", value: behaviourChartData.motivation, color: "#8e5ea2" },
  //     { name: "Attitude", value: behaviourChartData.attitude, color: "#59baa0" },
  //     { name: "Values and Ethics", value: behaviourChartData.valuesandethics, color: "#e8c3b9" },
  // ];
  return (
    <div className="col-md-12">
      <div className="card borderred my-4">
        <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
          <div className="bg-danger px-3 shadow-danger border-radiusus pt-4 pb-3">
            <div className="row">
              <div className="col-12">
                <h6 className="text-white text-capitalize px-3 d-flex align-items-center">
                  Behaviour chart
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className="card-body px-4 ps-0 pb-2">
          <HorizontalBarChart data={data} xKey="name" yKey="value" />
        </div>
        <div className="card-footer border-top">
          <span className="text-bolder">Note:</span> This chart gives the
          behavioural profile of a user across the above mentioned traits.
        </div>
      </div>
    </div>
  );
};
export default BehaviourChart;

const HorizontalBarChart = ({ data, yKey, xKey }) => {
  const maxTextWidth = useMemo(
    () =>
      data.reduce((acc, cur) => {
        const value = cur[yKey];
        const width = typeof window == 'object' && measureText14HelveticaNeue(value.toLocaleString());
        if (width > acc) {
          return width;
        }
        return acc;
      }, 0),
    [data, yKey]
  );

  return (
    <ResponsiveContainer width={"100%"} height={80 * data.length} debounce={50}>
      <BarChart
        data={data}
        layout="vertical"
        margin={{ left: 50, right: maxTextWidth + (BAR_AXIS_SPACE - 8) }}
      >
        <XAxis type="number" />
        <YAxis
          yAxisId={0}
          dataKey={xKey}
          type="category"
          // axisLine={false}
          // tickLine={false}
        />
        <Bar dataKey={yKey} minPointSize={2} barSize={50}>
          {data.map((d, idx) => {
            return <Cell key={d[xKey]} fill={d.color} />;
          })}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};
