import React from 'react';
import NVD3Chart from 'react-nvd3';
import { useData } from '../DataContext';


const BubbleChart = () => {
  const { bubbleChartData } = useData();

  return (
    <div className="chart-container">
      <NVD3Chart
        type="bubbleChart"
        datum={bubbleChartData}
        x="x"
        y="y"
        height={300}
        showLegend={false}
        bubble={{ size: d => d.size }}
      />
    </div>
  );
};

export default BubbleChart;
