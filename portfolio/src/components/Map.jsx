import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [95, -43.0, 4],
        center: [-5, -4],
        scale: 950
      }}
    >
      <Geographies
        geography="/features.json"
        fill="#BEDACD"
        stroke="#FFFFFF"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[70, 140]}
        dx={-10}
        dy={-10}
        connectorProps={{
          stroke: "#535354",
          strokeWidth: 2,
          strokeLinecap: "round"
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#535354">
          {"Denver"}
        </text>
      </Annotation>
      <Annotation
        subject={[102.55, 141.55]}
        dx={-10}
        dy={-10}
        connectorProps={{
          stroke: "#535354",
          strokeWidth: 2,
          strokeLinecap: "round"
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#535354">
          {"DC"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;