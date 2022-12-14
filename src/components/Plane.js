/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: iSteven (https://sketchfab.com/Steven007)
license: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
source: https://sketchfab.com/3d-models/boeing-787-dreamliner-3ba8a5275d0e41968b34d367c34e8f0f
title: Boeing 787 Dreamliner
*/

import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Plane({ id }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/boeing_787_dreamliner.glb"
  );
  const { actions } = useAnimations(animations, group);

  // Change color based on id
  materials["Material.003"].color = {
    // Main body
    r: parseInt(id.slice(0, 2), 16) / 265, // Get the first two characters of id
    g: parseInt(id.slice(2, 4), 16) / 265,
    b: parseInt(id.slice(5, 6), 16) / 265,
  };
  materials["Material.006"].color = {
    // Wings
    r: parseInt(id.slice(0, 2), 16) / 265, // Get the first two characters of id
    g: parseInt(id.slice(2, 4), 16) / 265,
    b: parseInt(id.slice(5, 6), 16) / 265,
  };

  console.log(materials);
  return (
    <group ref={group} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          position={[0, 0, 6]}
          rotation={[0, 0, 0]}
          scale={0.0001}
        >
          <group name="Boeing_787_Dreamlinerfbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="object022"
                  position={[-852.98, -128.33, 836.58]}
                  rotation={[0, 0, 0.19]}
                  scale={100}
                >
                  <mesh
                    name="object022_Material001_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.object022_Material001_0.geometry}
                    material={materials["Material.001"]}
                  />
                </group>
                <group
                  name="object009"
                  position={[852.98, -128.33, 836.58]}
                  rotation={[0, 0, 0.19]}
                  scale={100}
                >
                  <mesh
                    name="object009_Material001_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.object009_Material001_0.geometry}
                    material={materials["Material.001"]}
                  />
                </group>
                <group
                  name="object"
                  position={[0, -138.03, 324.48]}
                  scale={100}
                >
                  <mesh
                    name="object_Material002_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.object_Material002_0.geometry}
                    material={materials["Material.002"]}
                  />
                </group>
                <group
                  name="object001"
                  position={[0, 70.54, 30.73]}
                  scale={100}
                >
                  <mesh
                    name="object001_Material003_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.object001_Material003_0.geometry}
                    material={materials["Material.003"]}
                  />
                </group>
                <group
                  name="object002"
                  position={[0, -149.5, 632.46]}
                  scale={100}
                >
                  <mesh
                    name="object002_whtemet_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.object002_whtemet_0.geometry}
                    material={materials.whtemet}
                  />
                </group>
                <group
                  name="object005"
                  position={[0, -138.03, 594.15]}
                  scale={100}
                >
                  <mesh
                    name="object005_blackmat_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.object005_blackmat_0.geometry}
                    material={materials.blackmat}
                  />
                </group>
                <group
                  name="object007"
                  position={[0, -192.05, 2030.51]}
                  scale={100}
                />
                <group
                  name="object008"
                  position={[0, 654.14, -1821.8]}
                  scale={100}
                >
                  <mesh
                    name="object008_Material011_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.object008_Material011_0.geometry}
                    material={materials["Material.011"]}
                  />
                </group>
                <group
                  name="object010"
                  position={[0, -179.19, 862.2]}
                  scale={100}
                >
                  <mesh
                    name="object010_Material012_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.object010_Material012_0.geometry}
                    material={materials["Material.012"]}
                  />
                </group>
                <group
                  name="object011"
                  position={[0, -57.81, 250.03]}
                  scale={100}
                >
                  <mesh
                    name="object011_Material005_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.object011_Material005_0.geometry}
                    material={materials["Material.005"]}
                  />
                </group>
                <group
                  name="object012"
                  position={[0, -22.81, 330.6]}
                  scale={100}
                >
                  <mesh
                    name="object012_Material007_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.object012_Material007_0.geometry}
                    material={materials["Material.007"]}
                  />
                </group>
                <group
                  name="object013"
                  position={[0, 59.46, -263.9]}
                  scale={100}
                >
                  <mesh
                    name="object013_Material008_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.object013_Material008_0.geometry}
                    material={materials["Material.008"]}
                  />
                </group>
                <group
                  name="object015"
                  position={[0, 127.62, -1877.22]}
                  scale={100}
                >
                  <mesh
                    name="object015_Material010_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.object015_Material010_0.geometry}
                    material={materials["Material.010"]}
                  />
                </group>
                <group
                  name="object016"
                  position={[0, 88.84, -77.14]}
                  scale={100}
                >
                  <mesh
                    name="object016_Material006_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.object016_Material006_0.geometry}
                    material={materials["Material.006"]}
                  />
                </group>
                <group
                  name="object017"
                  position={[0, 169.39, -2067.51]}
                  scale={100}
                >
                  <mesh
                    name="object017_Material009_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.object017_Material009_0.geometry}
                    material={materials["Material.009"]}
                  />
                </group>
                <group
                  name="object018"
                  position={[0, -129.25, 672.21]}
                  scale={100}
                >
                  <mesh
                    name="object018_Material004_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.object018_Material004_0.geometry}
                    material={materials["Material.004"]}
                  />
                </group>
                <group
                  name="object021"
                  position={[0, -155.6, 65.92]}
                  scale={100}
                />
                <group
                  name="object006"
                  position={[0, -178.49, 984.12]}
                  scale={100}
                />
                <group
                  name="object003"
                  position={[0, -312.01, 969.9]}
                  scale={100}
                />
                <group
                  name="object004"
                  position={[0, -308.69, 973.05]}
                  scale={100}
                />
                <group
                  name="object019"
                  position={[0, -236.06, 1007.86]}
                  scale={100}
                />
                <group
                  name="object020"
                  position={[0, -124.11, 1010.07]}
                  scale={100}
                />
                <group
                  name="object014"
                  position={[0, -113.57, 1032.4]}
                  scale={100}
                >
                  <mesh
                    name="object014_whtemet_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.object014_whtemet_0.geometry}
                    material={materials.whtemet}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/boeing_787_dreamliner.glb");
