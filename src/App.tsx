import { Canvas } from '@react-three/fiber';

import './App.css';

const App = () => {
  return (
    <div id="canvas-container">
      <Canvas>
        <mesh>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh>
      </Canvas>
    </div>
  );
};

export default App;
