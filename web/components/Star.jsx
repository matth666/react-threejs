import { Sphere } from "@react-three/drei";

const Star = (props) => {
  const { args, position, color } = props;

  return (
    <Sphere args={args} position={position}>
      <meshBasicMaterial color={color} />
    </Sphere>
  );
};

export default Star;
