import React from "react";
import "./BarGraph.scss";

interface BarGraphProps {
  values: value[];
}

interface value {
  label: string;
  value: number;
  color: string;
}

const BarGraph: React.FC<BarGraphProps> = ({ values }) => {
  return (
    <div className="barGraph">
      {values.map(({ label, value, color }, index) => (
        <div key={index} className="barContainer">
          <span className="label">{label}</span>
          <div className="bar">
            <div
              className="filledBar"
              style={{ width: `${value}%`, backgroundColor: color }}
            ></div>
          </div>
          <span className="value">{value}%</span>
        </div>
      ))}
    </div>
  );
};

export default BarGraph;
