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
            <Star
              name="sun"
              args={starBySystem[0].args}
              position={starBySystem[0].position}
              color={starBySystem[0].color}
            />
            {planetsBySystem.map((planet) => (
              <group key={planet.id} position={planet.groupPosition}>
                <Planet
                  name={planet.planetName}
                  args={planet.args}
                  position={planet.position}
                  color={planet.color}
                />
                {moonsBySystem.map((moon) =>
                  moon.planetId === planet.id ? (
                    <Planet
                      key={moon.id}
                      name={moon.moonName}
                      args={moon.args}
                      position={moon.position}
                      color={moon.color}
                    />
                  ) : null
                )}
              </group>
            ))}
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
