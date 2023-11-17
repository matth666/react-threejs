import { Sphere } from "@react-three/drei";

const Planet = (props) => {
  const { args, position, color } = props;

  return (
    <Sphere args={args} position={position}>
      <meshBasicMaterial color={color} />
    </Sphere>
  );
};

export default Planet;
