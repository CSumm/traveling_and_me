import  React  from "react";
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import EiffelTower from '../models/eiffel.glb'
import { Camera } from "three";


export default function ThreeLoader(props) {  
    const gltf = useLoader(GLTFLoader, EiffelTower);
    return (
          <>
            <primitive object={gltf.scene} scale={1} position={props.position}/>
          </>
    );
}