import React, { useEffect, useRef } from 'react'
import * as d3 from 'd3'
import './svg.css'

const Chart = () => {
  const containerRef = useRef(null)

  useEffect(() => {

    const dom = containerRef.current
    // const width = dom.clientWidth;
    // const height = dom.clientHeight;
    const select = d3.select('svg')
    // d3.remove('svg')
    // const container = containerRef.current;
    
    console.log(select, dom);
    
  }, [])
  
  
  return (
    <>
    <h2>A Rectangle</h2>
    <svg ref={containerRef} className="svg" width="50" height="50">
    <rect x="0" y="0" width="50" height="50"/>
    </svg>
    
    <br/>
    <br/>
    <br/>

    <h2>A Circle</h2>
    <svg width="50" height="50">
    <circle cx="25" cy="25" r="25" />
    </svg>
    
<br/>
<br/>
<br/>

    <h2>An Ellipse</h2>
    <svg width="50" height="50">
    <ellipse cx="25" cy="25" rx="15" ry="10" />
    </svg>
    
            
    <br/>
    <br/>
    <br/>
    
    <h2>A straight line</h2>
    <svg width="50" height="50">
    <line x1="5" y1="5" x2="40" y2="40" stroke="gray" strokeWidth="5"/>
    </svg>
    
            
    <br/>
    <br/>
    <br/>
    
    <h2>A Polyline</h2>
    <svg width="50" height="50">
    <polyline fill="none" stroke="blue" strokeWidth="1"
      points="05,30
              15,30
              15,20
              25,20
              25,10
              35,10"
    />
    </svg>
    
    
            
    <br/>
    <br/>
    <br/>
    
    <h2>A Polygon</h2>
    <svg width="50" height="50">
    <polygon fill="yellow" stroke="blue" strokeWidth="2"
    points="05,30
            15,10
            25,30"
    />
    </svg>
    </>
    );
}

export default Chart;
