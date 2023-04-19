// import React, { useEffect, useRef } from "react";
// import { useGLTF } from "@react-three/drei";
// import useSceneStore from "../useSceneStore";
// import { MeshStandardMaterial } from "three";
// import { Color } from "three";

// export function Brain(props) {
//     const { nodes, materials } = useGLTF("/epilep.glb");
//     const boneOpacity = useSceneStore((state) => state.boneOpacity);
//     const skin = useSceneStore((state) => state.skin);
//     const brain = useSceneStore((state) => state.brain);
//     const brainMat = new MeshStandardMaterial({
//         metalness: 0.5,
//         roughness: 0.4,
//         clearcoat: 1,
//         color: "#f66a8e"
//     });

//     useEffect(() => {
//         materials.material_3.color = new Color(0xffffff);
//     });

//     useEffect(() => {
//         materials.material_3.transparent = true;
//         materials.material_3.opacity = boneOpacity;
//         if (boneOpacity === 0) {
//             materials.material_3.visible = false;
//         } else {
//             materials.material_3.visible = true;
//         }
//     }, [boneOpacity]);

//     return (
//         <group {...props} dispose={null}>
//             <group rotation={[-Math.PI / 2, 0, 0]}>
//                 <mesh geometry={nodes.Object_3.geometry} material={materials.material_3} />
//                 <mesh geometry={nodes.Object_4.geometry} material={materials.material_3} />
//                 <mesh geometry={nodes.Object_5.geometry} material={materials.material_3} />
//                 <mesh geometry={nodes.Object_6.geometry} material={materials.material_3} />

//                 <mesh geometry={nodes.Object_8.geometry} material={materials.material_2} />
//                 <mesh geometry={nodes.Object_9.geometry} material={materials.material_2} />
//                 <mesh geometry={nodes.Object_10.geometry} material={materials.material_2} />
//                 <mesh geometry={nodes.Object_11.geometry} material={materials.material_2} />
//                 <mesh geometry={nodes.Object_12.geometry} material={materials.material_2} />
//                 <mesh geometry={nodes.Object_13.geometry} material={materials.material_2} />
//                 <mesh geometry={nodes.Object_14.geometry} material={materials.material_2} />
//                 <mesh geometry={nodes.Object_15.geometry} material={materials.material_2} />
//                 <mesh geometry={nodes.Object_16.geometry} material={materials.material_2} />
//                 <mesh geometry={nodes.Object_17.geometry} material={materials.material_2} />
//                 <mesh geometry={nodes.Object_18.geometry} material={materials.material_2} />
//                 <mesh geometry={nodes.Object_19.geometry} material={materials.material_2} />
//                 <mesh geometry={nodes.Object_20.geometry} material={materials.material_2} />
//                 <mesh geometry={nodes.Object_21.geometry} material={materials.material_2} />
//                 <mesh geometry={nodes.Object_22.geometry} material={materials.material_2} />
//                 <mesh geometry={nodes.Object_23.geometry} material={materials.material_2} />
//                 <mesh geometry={nodes.Object_24.geometry} material={materials.material_2} />
//                 <group visible={brain}>
//                     <mesh geometry={nodes.Object_26.geometry} material={brainMat} />
//                     <mesh geometry={nodes.Object_27.geometry} material={brainMat} />
//                     <mesh geometry={nodes.Object_28.geometry} material={brainMat} />
//                 </group>
//                 <group visible={skin}>
//                     <mesh geometry={nodes.Object_30.geometry} material={materials.material_0} />
//                     <mesh geometry={nodes.Object_31.geometry} material={materials.material_0} />
//                 </group>
//             </group>
//         </group>
//     );
// }

// useGLTF.preload("/epilep.glb");
