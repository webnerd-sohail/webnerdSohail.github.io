
 
//-----------------------------------------------------------------------------//
import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

const rotatingCube = () => {
  
  const meshRef = useRef();
  
  useFrame(()=>{
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.x += 0.01;

  }
  })
  return (
    <mesh ref = {meshRef}>
      <cylinderGeometry args = {[1,1,1]}/>
      <meshLambertMaterial color = "#468585" emissive = "#468585" />
    </mesh>
  )
}



const App = () => {
    return (
      <Canvas style = {  { height: '100vh', width: '100vw', display:'flex', justifyContent:'center', alignItems:'center'}}>
      
       <OrbitControls enableZoom enablePan enableRotate/>
       
       <directionalLight position={[1,1,1]} intensity = {10} color  = {0x9CDDBA6}/>
       
       <color attach="background" args = {['#F0F0F0']}/>
       
       <rotatingCube/>
      
      
      
      </Canvas>
    )
  }


  export default App;



