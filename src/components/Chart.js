import React, { useEffect, useRef } from 'react'
import * as d3 from 'd3'


const Chart = () => {
  const containerRef = useRef(null);

  const points = [
    {xpoint: 25,  ypoint: 150},
    {xpoint: 75,  ypoint: 85},
    {xpoint: 100, ypoint: 115},
    {xpoint: 175, ypoint: 25}
  ];

  useEffect(() => {
    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    const Gen = d3.line()
      .x((p) => p.xpoint)
      .y((p) => p.ypoint)
      .curve(d3.curveCardinal);
  
d3.select("#gfg")
  .append("path")
  .attr("d", Gen(points))
  .attr("fill", "none")
  .attr("stroke", "green");
  }, []);

  return (
    <svg ref={containerRef} id="gfg" width="200" 
    height="200">
</svg>
  );
}

export default Chart;
