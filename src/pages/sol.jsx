import { OrbitControls, PerspectiveCamera, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Planet from "../../web/components/Planet";
import Star from "../../web/components/Star";
import axios from "axios";

const Scene = ({ starBySystem, planetsBySystem, moonsBySystem }) => {
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="h-[100%] w-[100%] bg-black">
        <Canvas camera={{ position: [1, 15, 10] }}>
          <PerspectiveCamera />
          <OrbitControls
            rotateSpeed={0.1}
            autoRotate={true}
            autoRotateSpeed={1}
            enableZoom={false}
          />
          <pointLight position={[0, 0, 0]} intensity={1.2} color="#f6f3ea" />
          <Stars
            radius={300}
            depth={60}
            count={10000}
            factor={7}
            saturation={0}
            fade={true}
          />
          <group>
            {/* sun */}
            <Star
              name="sun"
              args={starBySystem[0].args}
              position={starBySystem[0].position}
              color={starBySystem[0].color}
            />
            {/* mercury */}
            <Planet
              name="mercury"
              args={planetsBySystem[0].args}
              position={planetsBySystem[0].position}
              color={planetsBySystem[0].color}
            />
            {/* venus */}
            <Planet
              name="venus"
              args={planetsBySystem[1].args}
              position={planetsBySystem[1].position}
              color={planetsBySystem[1].color}
            />
            {/* earth */}
            <group name="earthAndMoon" position={[2.3, 0, 3.2]}>
              <Planet
                name="earth"
                args={planetsBySystem[2].args}
                position={planetsBySystem[2].position}
                color={planetsBySystem[2].color}
              />
              <Planet
                name="moon"
                args={moonsBySystem[0].args}
                position={moonsBySystem[0].position}
                color={moonsBySystem[0].color}
              />
            </group>
            {/* mars */}
            <group name="marsAndMoons" position={[-5.2, 0, 1.5]}>
              <Planet
                name="mars"
                args={planetsBySystem[3].args}
                position={planetsBySystem[3].position}
                color={planetsBySystem[3].color}
              />
              <Planet
                name="deimos"
                args={moonsBySystem[1].args}
                position={moonsBySystem[1].position}
                color={moonsBySystem[1].color}
              />
              <Planet
                name="phobos"
                args={moonsBySystem[2].args}
                position={moonsBySystem[2].position}
                color={moonsBySystem[2].color}
              />
            </group>
            {/* jupiter */}
            <group name="jupiterAndMoons" position={[6, 0, -4]}>
              <Planet
                name="jupiter"
                args={planetsBySystem[4].args}
                position={planetsBySystem[4].position}
                color={planetsBySystem[4].color}
              />
              <Planet
                name="io"
                args={moonsBySystem[3].args}
                position={moonsBySystem[3].position}
                color={moonsBySystem[3].color}
              />
              <Planet
                name="europe"
                args={moonsBySystem[4].args}
                position={moonsBySystem[4].position}
                color={moonsBySystem[4].color}
              />
              <Planet
                args={moonsBySystem[5].args}
                position={moonsBySystem[5].position}
                color={moonsBySystem[5].color}
              />
              <Planet
                name="callisto"
                args={moonsBySystem[6].args}
                position={moonsBySystem[6].position}
                color={moonsBySystem[6].color}
              />
            </group>
            {/* saturn */}
            <group name="saturnAndMoons" position={[-3, 0, 6.5]}>
              <Planet
                name="saturn"
                args={planetsBySystem[5].args}
                position={planetsBySystem[5].position}
                color={planetsBySystem[5].color}
              />
              <Planet
                name="thetys"
                args={moonsBySystem[7].args}
                position={moonsBySystem[7].position}
                color={moonsBySystem[7].color}
              />
              <Planet
                name="dione"
                args={moonsBySystem[8].args}
                position={moonsBySystem[8].position}
                color={moonsBySystem[8].color}
              />
              <Planet
                name="rhea"
                args={moonsBySystem[9].args}
                position={moonsBySystem[9].position}
                color={moonsBySystem[9].color}
              />
              <Planet
                name="titan"
                args={moonsBySystem[10].args}
                position={moonsBySystem[10].position}
                color={moonsBySystem[10].color}
              />
              <Planet
                name="hyperion"
                args={moonsBySystem[11].args}
                position={moonsBySystem[11].position}
                color={moonsBySystem[11].color}
              />
            </group>
            {/* uranus */}
            <group name="uranusAndMoons" position={[10, 0, 5]}>
              <Planet
                name="uranus"
                args={planetsBySystem[6].args}
                position={planetsBySystem[6].position}
                color={planetsBySystem[6].color}
              />
              <Planet
                name="miranda"
                args={moonsBySystem[12].args}
                position={moonsBySystem[12].position}
                color={moonsBySystem[12].color}
              />
              <Planet
                name="ariel"
                args={moonsBySystem[13].args}
                position={moonsBySystem[13].position}
                color={moonsBySystem[13].color}
              />
              <Planet
                name="umbriel"
                args={moonsBySystem[14].args}
                position={moonsBySystem[14].position}
                color={moonsBySystem[14].color}
              />
              <Planet
                name="titania"
                args={moonsBySystem[15].args}
                position={moonsBySystem[15].position}
                color={moonsBySystem[15].color}
              />
              <Planet
                name="oberon"
                args={moonsBySystem[16].args}
                position={moonsBySystem[16].position}
                color={moonsBySystem[16].color}
              />
            </group>
            {/* neptune */}
            <group name="neptuneAndMoon" position={[-9, 0, -4]}>
              <Planet
                name="neptune"
                args={planetsBySystem[7].args}
                position={planetsBySystem[7].position}
                color={planetsBySystem[7].color}
              />
              <Planet
                name="triton"
                args={moonsBySystem[17].args}
                position={moonsBySystem[17].position}
                color={moonsBySystem[17].color}
              />
            </group>
            {/* pluton */}
            <group name="plutonAndMoon" position={[14, 0, 1.5]}>
              <Planet
                name="pluton"
                args={planetsBySystem[8].args}
                position={planetsBySystem[8].position}
                color={planetsBySystem[8].color}
              />
              <Planet
                name="charon"
                args={moonsBySystem[18].args}
                position={moonsBySystem[18].position}
                color={moonsBySystem[18].color}
              />
            </group>
          </group>
        </Canvas>
      </div>
    </div>
  );
};

export default Scene;

export const getStaticProps = async () => {
  const { data: starBySystem } = await axios.get(
    "http://localhost:3000/api/systems/1/star"
  );
  const { data: planetsBySystem } = await axios.get(
    "http://localhost:3000/api/systems/1/planets"
  );
  const { data: moonsBySystem } = await axios.get(
    "http://localhost:3000/api/systems/1/moons"
  );

  return {
    props: {
      starBySystem,
      planetsBySystem,
      moonsBySystem,
    },
  };
};
