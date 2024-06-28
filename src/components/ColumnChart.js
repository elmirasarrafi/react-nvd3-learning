import React from 'react';
import NVD3Chart from 'react-nvd3';
import { useData } from '../DataContext';
import { timeFormat } from 'd3-time-format';
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
        height={350}
        width={550}
        margin={{ left: 70, right: 70, top: 50, bottom: 50 }}
        yAxis1={{ tickFormat: d => d3.format(',.1f')(d) }}
        yAxis2={{ tickFormat: d => d3.format(',.1f')(d) }}
        xAxis={{ tickFormat: d => timeFormat('%x')(new Date(d)) }}
      />
    </div>
  );
};

export default ComboChart;
