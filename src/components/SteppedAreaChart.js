import React from 'react';
import NVD3Chart from 'react-nvd3';
import { useData } from '../DataContext';
import * as d3 from 'd3';

const SteppedAreaChart = () => {
  const { areaChartData } = useData();
  const data = [{ key: "Stepped Area Data", values: areaChartData.map(d => ({ x: d.date.getTime(), y: d.value })) }];

  return (
    <div className="chart-container">
      <NVD3Chart
        type="stackedAreaChart"
        datum={data}
        x="x"
        y="y"
        height={300}
        showControls={false}
        showLegend={false}
        xAxis={{ tickFormat: d => d3.timeFormat('%x')(new Date(d)) }}
      />
    </div>
  );
};

export default SteppedAreaChart;
