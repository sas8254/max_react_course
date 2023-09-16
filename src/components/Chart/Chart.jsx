import "./Chart.css";
import ChartBar from "./ChartBar";

export default function Chart({ dataPoints }) {
  const dataPointValues = dataPoints.map((point) => {
    return point.value;
  });

  const maxValue = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={maxValue}
            label={dataPoint.label}
          />
        );
      })}
    </div>
  );
}
