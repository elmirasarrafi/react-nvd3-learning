import React from 'react';
import NVD3Chart from 'react-nvd3';
import { useData } from '../DataContext';
import { timeFormat } from 'd3-time-format';

const LineChart = () => {
  const { lineChartData } = useData();

  return (
    <div className="chart-container">
      <NVD3Chart
        type="lineChart"
        datum={lineChartData}
        x="x"
        y="y"
        height={350}
        width={550}
        xAxis={{ tickFormat: d => timeFormat('%x')(new Date(d)) }}
      />
    </div>
  );
};

export default LineChart;
