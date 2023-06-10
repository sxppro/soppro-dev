import { VStack } from '@chakra-ui/react';
import { Canvas } from '@react-three/fiber';
import GradientMesh from './GradientMesh';

const GradientV2 = () => {
  return (
    <VStack w={'full'} h={'100vh'}>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <GradientMesh />
      </Canvas>
    </VStack>
  );
};

export default GradientV2;
