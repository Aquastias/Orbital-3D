import { Canvas } from '@react-three/fiber';

import './App.css';

const App = () => {
  return (
    <div id="canvas-container">
      <Canvas>
        <pointLight />
        <mesh>
          <sphereGeometry />
          <meshStandardMaterial color="hotpink" />
        </mesh>
      </Canvas>
    </div>
  );
};

export default App;
