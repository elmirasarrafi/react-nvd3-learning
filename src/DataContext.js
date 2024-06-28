import React, { createContext, useContext } from 'react';

const DataContext = createContext();

const data = {
  areaChartData: [
    { date: new Date(2020, 1, 1), value: 30 },
    { date: new Date(2020, 2, 1), value: 80 },
    { date: new Date(2020, 3, 1), value: 45 },
    { date: new Date(2020, 4, 1), value: 60 },
    { date: new Date(2020, 5, 1), value: 20 },
    { date: new Date(2020, 6, 1), value: 90 },
    { date: new Date(2020, 7, 1), value: 55 },
  ],
  barChartData: [{ key: "Cumulative Return", values: [{ x: "A", y: 12 }, { x: "B", y: 5 }, { x: "C", y: 6 }, { x: "D", y: 6 }, { x: "E", y: 9 }, { x: "F", y: 10 }] }],
  lineChartData: [{ key: "Line Data", values: [{ x: new Date(2020, 1, 1).getTime(), y: 30 }, { x: new Date(2020, 2, 1).getTime(), y: 80 }, { x: new Date(2020, 3, 1).getTime(), y: 45 }, { x: new Date(2020, 4, 1).getTime(), y: 60 }, { x: new Date(2020, 5, 1).getTime(), y: 20 }, { x: new Date(2020, 6, 1).getTime(), y: 90 }, { x: new Date(2020, 7, 1).getTime(), y: 55 }] }],
  pieChartData: [{ key: "One", y: 12 }, { key: "Two", y: 5 }, { key: "Three", y: 6 }, { key: "Four", y: 6 }, { key: "Five", y: 9 }, { key: "Six", y: 10 }],
  scatterPlotData: [{ key: "Scatter Data", values: [{ x: 30, y: 20 }, { x: 50, y: 90 }, { x: 90, y: 50 }, { x: 20, y: 80 }, { x: 40, y: 40 }] }],
  comboChartData: [
    { key: "Data Set 1", type: "bar", yAxis: 1, values: [{ x: new Date(2020, 1, 1).getTime(), y: 30 }, { x: new Date(2020, 2, 1).getTime(), y: 80 }, { x: new Date(2020, 3, 1).getTime(), y: 45 }, { x: new Date(2020, 4, 1).getTime(), y: 60 }, { x: new Date(2020, 5, 1).getTime(), y: 20 }, { x: new Date(2020, 6, 1).getTime(), y: 90 }, { x: new Date(2020, 7, 1).getTime(), y: 55 }] },
    { key: "Data Set 2", type: "line", yAxis: 2, values: [{ x: new Date(2020, 1, 1).getTime(), y: 50 }, { x: new Date(2020, 2, 1).getTime(), y: 60 }, { x: new Date(2020, 3, 1).getTime(), y: 80 }, { x: new Date(2020, 4, 1).getTime(), y: 30 }, { x: new Date(2020, 5, 1).getTime(), y: 70 }, { x: new Date(2020, 6, 1).getTime(), y: 20 }, { x: new Date(2020, 7, 1).getTime(), y: 90 }] }
  ],
  geoChartData: [
    { country: 'USA', value: 100 },
    { country: 'CAN', value: 200 },
    { country: 'MEX', value: 300 },
    { country: 'IND', value: 400 },
    { country: 'IRN', value: 150 },
    { country: 'CHN', value: 500 },
    { country: 'PAK', value: 250 },
  ],
};

export const DataProvider = ({ children }) => (
  <DataContext.Provider value={data}>{children}</DataContext.Provider>
);

export const useData = () => useContext(DataContext);
