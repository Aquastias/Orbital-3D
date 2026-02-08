import { Canvas } from '@react-three/fiber';
import { useRef } from 'react';

import './App.css';

const App = () => {
  const dirLight = useRef(null);

  return (
    <div id="canvas-container">
      <Canvas>
        <mesh>
          <sphereGeometry />
          <meshStandardMaterial color="hotpink" />
        </mesh>
        <directionalLight position={[1, 2, 1]} ref={dirLight} />
        {dirLight.current && (
          <directionalLightHelper
            position={[1, 2, 1]}
            args={[dirLight.current, 2, 0xff0000]}
          />
        )}
      </Canvas>
    </div>
  );
};

export default App;
