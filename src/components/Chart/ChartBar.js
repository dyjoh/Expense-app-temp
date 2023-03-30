import React from "react";
import "./ChartBar.css";
export default function ChartBar(props) {
  let fillHeight = "0%";

  if (props.maxValue > 0) {
    fillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="inner">
        <div className="fill" style={{ height: fillHeight }}></div>
      </div>
      <div className="label">{props.label}</div>
    </div>
  );
}
