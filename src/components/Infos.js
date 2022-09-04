import React from "react";

export default function Infos({ markers, activeMarkerID, setActiveMarkerID }) {
  var currentMarker = markers.find((item) => item.id === activeMarkerID);
  console.log(
    markers[markers.map((object) => object.id).indexOf(activeMarkerID) + 1]?.id
  );
  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        padding: "2rem",
        color: "white",
      }}
    >
      <h1>
        Marker {markers.map((object) => object.id).indexOf(activeMarkerID)} |{" "}
        {markers?.length}
      </h1>
      <h1>
        Type:{" "}
        {currentMarker?.type == "human"
          ? "🧍"
          : currentMarker?.type == "satellite"
          ? "🛰️"
          : "✈️"}
      </h1>
      <h1>Lat: {currentMarker?.lat} </h1>
      <h1>Lon: {currentMarker?.lat} </h1>
      <button
        onClick={() =>
          setActiveMarkerID(
            markers[
              markers.map((object) => object.id).indexOf(activeMarkerID) - 1
            ]?.id
          )
        }
      >
        Previous
      </button>
      <button
        onClick={() =>
          setActiveMarkerID(
            markers[
              markers.map((object) => object.id).indexOf(activeMarkerID) + 1
            ]?.id
          )
        }
      >
        Next
      </button>
    </div>
  );
}
