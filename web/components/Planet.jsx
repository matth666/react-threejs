import { Sphere } from "@react-three/drei";

const Planet = (props) => {
  const { ref, args, position, color } = props;

  return (
    <Sphere ref={ref} args={args} position={position}>
      <meshBasicMaterial color={color} />
    </Sphere>
  );
};

export default Planet;
