// src/components/SimpleMap.js
import "leaflet/dist/leaflet.css";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

const Map = () => {
  // Coordinates for Malbarone location
  // Coordinates for Melbourne, Australia (replace with actual coordinates for Malborne if needed)
  const position = [-37.8136, 144.9631];

  return (
    <div className="relative w-full h-[300px] mt-8">
      {/* Map container */}
      <MapContainer
        center={position}
        zoom={12}
        className="w-full h-full absolute -z-[-1]"
      >
        {/* TileLayer for map background */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {/* Marker on the map */}
        <Marker
          position={position}
          icon={
            new L.Icon({
              iconUrl: require("leaflet/dist/images/marker-icon.png"),
              iconSize: [25, 41],
              iconAnchor: [12, 41],
            })
          }
        >
          <Popup>
            {/* Highlighted Malbarone name */}
            <strong style={{ color: "yellow", fontSize: "18px" }}>
              Malbarone
            </strong>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
