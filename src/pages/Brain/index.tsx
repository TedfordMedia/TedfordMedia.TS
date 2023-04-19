import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
// import BrainDiv from "components/BrainDiv";
import "@styles/styles.css";
import * as THREE from "three";

const Brain: React.FC = () => {
    return (
        // <div id="mainpage">
        //     <div>Brain Page</div>
        //     <BrainDiv />
        // </div>
        <>
            <Canvas
                shadows
                camera={{ position: [20, 0, 35], fov: 42 }}
                onCreated={({ gl, scene }) => {
                    gl.physicallyCorrectLights = true;
                    scene.background = new THREE.Color(0xff0000);
                    gl.shadowMap.enabled = true;
                    gl.shadowMap.type = THREE.PCFSoftShadowMap;
                    gl.shadowMap.autoUpdate = true;
                    gl.toneMapping = THREE.ACESFilmicToneMapping;
                }}>
                {/* <MyBrainScene /> */}
                <OrbitControls />
            </Canvas>
        </>
    );
};

export default Brain;
