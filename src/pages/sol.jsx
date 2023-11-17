import { OrbitControls, PerspectiveCamera, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Planet from "../../web/components/Planet";
import Star from "../../web/components/Star";

const Scene = () => {
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="h-[100%] w-[100%] bg-black">
        <Canvas camera={{ position: [1, 15, 10] }}>
          <ambientLight args={["#00ff00", 0.25]} />
          <directionalLight args={["#ff0000", 1]} position={[0, 0, 10]} />
          <group>
            {/* sun */}
            <Star
              name="sun"
              args={[2, 32, 16]}
              position={[0, 0, 0]}
              color={0xffea00}
            />
            {/* mercury */}
            <Planet
              name="mercury"
              args={[0.1, 32, 16]}
              position={[1.7, 0, -2]}
              color={0xffbe0b}
            />
            {/* venus */}
            <Planet
              name="venus"
              args={[0.3, 32, 16]}
              position={[-3.4, 0, -1]}
              color={0xe85d04}
            />
            {/* earth */}
            <group name="earthAndMoon" position={[2.3, 0, 3.2]}>
              <Planet
                name="earth"
                args={[0.3, 32, 16]}
                position={[0, 0, 0]}
                color={0x00a8e8}
              />
              <Planet
                name="moon"
                args={[0.05, 32, 16]}
                position={[0.3, 0, 0.3]}
                color={0xe7ecef}
              />
            </group>
            {/* mars */}
            <group name="marsAndMoons" position={[-5.2, 0, 1.5]}>
              <Planet
                name="mars"
                args={[0.2, 32, 16]}
                position={[0, 0, 0]}
                color={0xad2831}
              />
              <Planet
                name="deimos"
                args={[0.04, 32, 16]}
                position={[0.2, 0, 0.3]}
                color={0xe7ecef}
              />
              <Planet
                name="phobos"
                args={[0.04, 32, 16]}
                position={[-0.25, 0, -0.3]}
                color={0xe7ecef}
              />
            </group>
            {/* jupiter */}
            <group name="jupiterAndMoons" position={[6, 0, -4]}>
              <Planet
                name="jupiter"
                args={[1, 32, 16]}
                position={[0, 0, 0]}
                color={0xffbf69}
              />
              <Planet
                name="io"
                args={[0.04, 32, 16]}
                position={[1.5, 0, 0.3]}
                color={0xfcca46}
              />
              <Planet
                name="europe"
                args={[0.04, 32, 16]}
                position={[-1.75, 0, -0.3]}
                color={0xcae9ff}
              />
              <Planet
                name="ganymede"
                args={[0.04, 32, 16]}
                position={[1.3, 0, -1]}
                color={0xb49286}
              />
              <Planet
                name="callisto"
                args={[0.04, 32, 16]}
                position={[-0.4, 0, 1.3]}
                color={0xee6c4d}
              />
            </group>
            {/* saturn */}
            <group name="saturnAndMoons" position={[-3, 0, 6.5]}>
              <Planet
                name="saturn"
                args={[0.9, 32, 16]}
                position={[0, 0, 0]}
                color={0xeed7c5}
              />
              <Planet
                name="thetys"
                args={[0.04, 32, 16]}
                position={[1.2, 0, 0.3]}
                color={0x5f7470}
              />
              <Planet
                name="dione"
                args={[0.04, 32, 16]}
                position={[-1.4, 0, -0.3]}
                color={0x5f7470}
              />
              <Planet
                name="rhea"
                args={[0.04, 32, 16]}
                position={[1.2, 0, -1]}
                color={0x5f7470}
              />
              <Planet
                name="titan"
                args={[0.05, 32, 16]}
                position={[-1.3, 0, 1]}
                color={0xffc971}
              />
              <Planet
                name="hyperion"
                args={[0.04, 32, 16]}
                position={[0.7, 0, 1.5]}
                color={0x5f7470}
              />
            </group>
            {/* uranus */}
            <group name="uranusAndMoons" position={[10, 0, 5]}>
              <Planet
                name="uranus"
                args={[0.7, 32, 16]}
                position={[0, 0, 0]}
                color={0x56cfe1}
              />
              <Planet
                name="miranda"
                args={[0.04, 32, 16]}
                position={[1, 0, 0.3]}
                color={0x5f7470}
              />
              <Planet
                name="ariel"
                args={[0.04, 32, 16]}
                position={[-1.1, 0, -0.3]}
                color={0x5f7470}
              />
              <Planet
                name="umbriel"
                args={[0.04, 32, 16]}
                position={[-0.3, 0, -1]}
                color={0x5f7470}
              />
              <Planet
                name="titania"
                args={[0.04, 32, 16]}
                position={[-1, 0, 0.8]}
                color={0x5f7470}
              />
              <Planet
                name="oberon"
                args={[0.04, 32, 16]}
                position={[0.4, 0, 1.3]}
                color={0x5f7470}
              />
            </group>
            {/* neptune */}
            <group name="neptuneAndMoon" position={[-9, 0, -4]}>
              <Planet
                name="neptune"
                args={[0.6, 32, 16]}
                position={[0, 0, 0]}
                color={0x4895ef}
              />
              <Planet
                name="triton"
                args={[0.04, 32, 16]}
                position={[-0.8, 0, -0.6]}
                color={0xe2711d}
              />
            </group>
            {/* pluton */}
            <group name="plutonAndMoon" position={[14, 0, 1.5]}>
              <Planet
                name="pluton"
                args={[0.6, 32, 16]}
                position={[0, 0, 0]}
                color={0xffb563}
              />
              <Planet
                name="charon"
                args={[0.04, 32, 16]}
                position={[0.9, 0, -0.6]}
                color={0x5c677d}
              />
            </group>
          </group>
          <PerspectiveCamera />
          <OrbitControls autoRotate={true} enableZoom={false} />
        </Canvas>
      </div>
    </div>
  );
};

export default Scene;
