import { Sphere } from "@react-three/drei";

const Planet = (props) => {
  const { name, args, position, color } = props;

  return (
    <Sphere name={name} args={args} position={position}>
      <meshBasicMaterial color={color} />
    </Sphere>
  );
};

export default Planet;
