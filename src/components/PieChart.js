import React from 'react';
import NVD3Chart from 'react-nvd3';
import { useData } from '../DataContext';

const PieChart = () => {
  const { pieChartData } = useData();

  return (
    <div className="chart-container">
      <NVD3Chart
        type="pieChart"
        datum={pieChartData}
        x="key"
        y="y"
        height={300}
        showLabels
      />
    </div>
  );
};

export default PieChart;
