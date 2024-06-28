import React, { useRef, useEffect } from 'react';
import { geoMercator, geoPath } from 'd3-geo';
import { select } from 'd3-selection';
import { interpolateBlues } from 'd3-scale-chromatic';
import { json } from 'd3-fetch';
import { useData } from '../DataContext';

const GeoChart = () => {
  const d3Container = useRef(null);
  const { geoChartData } = useData();

  useEffect(() => {
    if (d3Container.current) {
      select(d3Container.current).select('svg').remove();
      const data = geoChartData;

      const width = 800;
      const height = 600;

      const svg = select(d3Container.current)
        .append('svg')
        .attr('width', width)
        .attr('height', height);

      const projection = geoMercator()
        .scale(120)
        .translate([width / 2, height / 2]);

      const path = geoPath()
        .projection(projection);

      json('https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson')
        .then(world => {
          svg.append('g')
            .selectAll('path')
            .data(world.features)
            .enter()
            .append('path')
            .attr('d', path)
            .attr('fill', d => {
              const country = data.find(country => country.country === d.id);
              return country ? interpolateBlues(country.value / 500) : '#ccc';
            })
            .attr('stroke', '#333');
        });
    }
  }, [geoChartData]);

  return <div className="chart-container geo" ref={d3Container}></div>;
};

export default GeoChart;
