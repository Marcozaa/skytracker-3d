import "./App.css";
import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sparkles, Stars } from "@react-three/drei";
import { DoubleSide, TextureLoader } from "three";
import { useLoader } from "@react-three/fiber";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { useMemo } from "react";
import { Sun } from "./components/Sun";
import { Moon } from "./components/Moon";
import Satellite from "./components/Satellite";
import { Suspense } from "react";
import { Loader } from "./components/Loader";
import * as THREE from "three";
import { Earth } from "./components/Earth";
import Infos from "./components/Infos";
import axios from "axios";

function App() {
  const moon = useRef();

  const prova = useRef();

  const [activeMarkerID, setActiveMarkerID] = useState("me");

  const [userLatitude, setUserLatitude] = useState(0);
  const [userLongitude, setUserLongitude] = useState(0);
  const [issLongitude, setIssLongitude] = useState(0);
  const [issLatitude, setIssLatitude] = useState(0);
  useEffect(() => {
    axios
      .get("https://api.wheretheiss.at/v1/satellites/25544")
      .then(function (response) {
        // handle success
        console.log(response);

        const index = markers.map((object) => object.id).indexOf("ISS");

        console.log(response?.data?.latitude);
        setIssLongitude(response?.data?.longitude);
        setIssLatitude(response?.data?.latitude);
        console.log(markers[index]);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);

  const markers = [
    { id: "aa01be", lat: 5, lon: 5, type: "plane" },
    { id: "me", lat: userLatitude, lon: userLongitude, type: "human" },
    { id: "New York", lat: 40.73061, lon: -73.935242, type: "human" },
    { id: "London", lat: 51.509865, lon: -0.118092, type: "human" },
    { id: "ISS", lat: issLatitude, lon: issLongitude, type: "satellite" },
    { id: "London", lat: 51.509865, lon: -0.118092, type: "human" },
  ];

  navigator.geolocation.getCurrentPosition((position) => {
    setUserLatitude(position.coords.latitude);
    setUserLongitude(position.coords.longitude);
  });

  const activeMarker = markers.find((marker) => marker.id === activeMarkerID);
  return (
    <div className="App">
      <Canvas
        style={{
          background: "#010b19",
        }}
        camera={{
          position: [0, 0, 10],
        }}
      >
        <Suspense fallback={<Loader />}>
          <pointLight position={[10, 5, 10]} />
          <Earth marker={activeMarker} />
          <Stars speed={2} />
        </Suspense>
      </Canvas>
      <Infos
        markers={markers}
        activeMarkerID={activeMarkerID}
        setActiveMarkerID={setActiveMarkerID}
      />
    </div>
  );
}

export default App;
