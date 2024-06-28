import React from 'react';
import NVD3Chart from 'react-nvd3';
import { useData } from '../DataContext';
import { timeFormat } from 'd3-time-format';

const AreaChart = () => {
  const { areaChartData } = useData();
  const data = [{ key: "Area Data", values: areaChartData.map(d => ({ x: d.date.getTime(), y: d.value })) }];

  // Define custom colors for the chart
  const colors = ["#add8e6", "#2ca02c", "#1f77b4"]; // Add more colors if needed

  return (
    <div className="chart-container">
      <NVD3Chart
        type="stackedAreaChart"
        datum={data}
        x="x"
        y="y"
        height={350}
        width={550}
        showControls={false}
        showLegend={false}
        color = {colors}
        xAxis={{ tickFormat: d => timeFormat('%x')(new Date(d)) }}
      />
    </div>
  );
};

export default AreaChart;
