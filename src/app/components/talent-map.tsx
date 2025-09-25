"use client";

import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

type MarkerType = {
  name: string;
  coordinates: [number, number];
  markerOffset: number;
};

const markers: MarkerType[] = [
  { name: "Romania", coordinates: [25.4858, 45.9432], markerOffset: -15 },
  { name: "Ethiopia", coordinates: [39.8212, 9.145], markerOffset: -15 },
  { name: "Brazil", coordinates: [-51.9253, -14.235], markerOffset: -15 },
  { name: "USA", coordinates: [-95.7129, 37.0902], markerOffset: -15 },
];

const MapChart = () => {
  return (
    <ComposableMap projection="geoMercator" projectionConfig={{ scale: 140 }}>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="#EAEAEC"
              stroke="#D6D6DA"
            />
          ))
        }
      </Geographies>

      {markers.map(({ name, coordinates, markerOffset }) => (
        <Marker key={name} coordinates={coordinates}>
          <circle r={6} fill="#F53" stroke="#fff" strokeWidth={2} />
          <text
            textAnchor="middle"
            y={markerOffset}
            style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
          >
            {name}
          </text>
        </Marker>
      ))}
    </ComposableMap>
  );
};

export default MapChart;
