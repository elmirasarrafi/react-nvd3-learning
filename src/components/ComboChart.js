import React from 'react';
import NVD3Chart from 'react-nvd3';
import { useData } from '../DataContext';
import * as d3 from 'd3';

const ComboChart = () => {
  const { comboChartData } = useData();

  return (
    <div className="chart-container">
      <NVD3Chart
        type="multiChart"
        datum={comboChartData}
        x="x"
        y="y"
        height={300}
        yAxis1={{ tickFormat: d => d3.format(',.1f')(d) }}
        yAxis2={{ tickFormat: d => d3.format(',.1f')(d) }}
        xAxis={{ tickFormat: d => d3.timeFormat('%x')(new Date(d)) }}
      />
    </div>
  );
};

export default ComboChart;
