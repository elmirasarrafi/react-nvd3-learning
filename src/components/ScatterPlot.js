import React from 'react';
import NVD3Chart from 'react-nvd3';
import { useData } from '../DataContext';
import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';

const ScatterPlot = () => {
  const { scatterPlotData } = useData();

  // Define custom colors for the chart
  const colors = ["#add8e6", "#2ca02c", "#1f77b4"]; // Add more colors if needed

  return (
    <div className="chart-container">
      <NVD3Chart
        type="scatterChart"
        datum={scatterPlotData}
        x="x"
        y="y"
        height={350}
        width={550}
        showDistX
        showDistY
        color={scaleOrdinal(schemeCategory10).range()}
      />
    </div>
  );
};

export default ScatterPlot;
