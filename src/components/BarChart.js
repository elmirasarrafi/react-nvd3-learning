import React from 'react';
import NVD3Chart from 'react-nvd3';
import { useData } from '../DataContext';

const BarChart = () => {
  const { barChartData } = useData();

  return (
    <div className="chart-container">
      <NVD3Chart
        type="discreteBarChart"
        datum={barChartData}
        x="x"
        y="y"
        height={350}
        width={550}
      />
    </div>
  );
};

export default BarChart;
