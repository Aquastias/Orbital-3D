import { Canvas } from '@react-three/fiber';
import { useState } from 'react';

import './App.css';

const App = () => {
  const [dirLight, setDirLight] = useState(null);

  return (
    <div id="canvas-container">
      <Canvas>
        <mesh>
          <sphereGeometry />
          <meshStandardMaterial color="hotpink" />
        </mesh>
        <directionalLight position={[1, 2, 1]} ref={setDirLight} />
        {dirLight && (
          <directionalLightHelper
            position={[1, 2, 1]}
            args={[dirLight, 2, 0xff0000]}
          />
        )}
      </Canvas>
    </div>
  );
};

export default App;
