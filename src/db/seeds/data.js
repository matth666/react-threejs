/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async (knex) => {
  // drop entries
  await knex("moons").del();
  await knex.raw('TRUNCATE TABLE "moons" RESTART IDENTITY CASCADE');
  await knex("planets").del();
  await knex.raw('TRUNCATE TABLE "planets" RESTART IDENTITY CASCADE');
  await knex("stars").del();
  await knex.raw('TRUNCATE TABLE "stars" RESTART IDENTITY CASCADE');
  await knex("systems").del();
  await knex.raw('TRUNCATE TABLE "systems" RESTART IDENTITY CASCADE');
  // Systems
  await knex("systems").insert([
    {
      system_name: "Sol",
      planets: 9,
      moons: 19,
    },
    {
      system_name: "Test",
      planets: 5,
      moons: 12,
    },
  ]);
  // Stars
  await knex("stars").insert([
    {
      system_id: 1,
      star_name: "Sun",
      args: [2, 32, 16],
      position: [0, 0, 0],
      color: "#ffea00",
    },
    {
      system_id: 2,
      star_name: "Test",
      args: [3, 32, 16],
      position: [0, 0, 0],
      color: "#ff0000",
    },
  ]);
  // Planets
  await knex("planets").insert([
    {
      system_id: 1,
      planet_name: "Mercury",
      order: "I",
      args: [0.1, 32, 16],
      position: [1.7, 0, -2],
      color: "#ffbe0b",
    },
    {
      system_id: 1,
      planet_name: "Venus",
      order: "II",
      args: [0.3, 32, 16],
      position: [-3.4, 0, -1],
      color: "#e85d04",
    },
    {
      system_id: 1,
      planet_name: "Earth",
      order: "III",
      args: [0.3, 32, 16],
      position: [0, 0, 0],
      color: "#00a8e8",
    },
    {
      system_id: 1,
      planet_name: "Mars",
      order: "IV",
      args: [0.2, 32, 16],
      position: [0, 0, 0],
      color: "#ad2831",
    },
    {
      system_id: 1,
      planet_name: "Jupiter",
      order: "V",
      args: [1, 32, 16],
      position: [0, 0, 0],
      color: "#ffbf69",
    },
    {
      system_id: 1,
      planet_name: "Saturn",
      order: "VI",
      args: [0.9, 32, 16],
      position: [0, 0, 0],
      color: "#eed7c5",
    },
    {
      system_id: 1,
      planet_name: "Uranus",
      order: "VII",
      args: [0.7, 32, 16],
      position: [0, 0, 0],
      color: "#56cfe1",
    },
    {
      system_id: 1,
      planet_name: "Neptune",
      order: "VIII",
      args: [0.6, 32, 16],
      position: [0, 0, 0],
      color: "#4895ef",
    },
    {
      system_id: 1,
      planet_name: "Pluton",
      order: "IX",
      args: [0.6, 32, 16],
      position: [0, 0, 0],
      color: "#ffb563",
    },
  ]);
  // Moons
  await knex("moons").insert([
    {
      system_id: 1,
      planet_id: 3,
      moon_name: "Moon",
      order: "A",
      args: [0.05, 32, 16],
      position: [0.3, 0, 0.3],
      color: "#e7ecef",
    },
    {
      system_id: 1,
      planet_id: 4,
      moon_name: "Deimos",
      order: "A",
      args: [0.04, 32, 16],
      position: [0.2, 0, 0.3],
      color: "#e7ecef",
    },
    {
      system_id: 1,
      planet_id: 4,
      moon_name: "Phobos",
      order: "B",
      args: [0.04, 32, 16],
      position: [-0.25, 0, -0.3],
      color: "#e7ecef",
    },
    {
      system_id: 1,
      planet_id: 5,
      moon_name: "Io",
      order: "A",
      args: [0.04, 32, 16],
      position: [1.5, 0, 0.3],
      color: "#fcca46",
    },
    {
      system_id: 1,
      planet_id: 5,
      moon_name: "Europe",
      order: "B",
      args: [0.04, 32, 16],
      position: [-1.75, 0, -0.3],
      color: "#cae9ff",
    },
    {
      system_id: 1,
      planet_id: 5,
      moon_name: "Ganymede",
      order: "C",
      args: [0.04, 32, 16],
      position: [1.3, 0, -1],
      color: "#b49286",
    },
    {
      system_id: 1,
      planet_id: 5,
      moon_name: "Callisto",
      order: "D",
      args: [0.04, 32, 16],
      position: [-0.4, 0, 1.3],
      color: "#ee6c4d",
    },
    {
      system_id: 1,
      planet_id: 6,
      moon_name: "Thetys",
      order: "A",
      args: [0.04, 32, 16],
      position: [1.2, 0, 0.3],
      color: "#5f7470",
    },
    {
      system_id: 1,
      planet_id: 6,
      moon_name: "Dione",
      order: "B",
      args: [0.04, 32, 16],
      position: [-1.4, 0, -0.3],
      color: "#5f7470",
    },
    {
      system_id: 1,
      planet_id: 6,
      moon_name: "Rhea",
      order: "C",
      args: [0.04, 32, 16],
      position: [1.2, 0, -1],
      color: "#5f7470",
    },
    {
      system_id: 1,
      planet_id: 6,
      moon_name: "Titan",
      order: "D",
      args: [0.05, 32, 16],
      position: [-1.3, 0, 1],
      color: "#ffc971",
    },
    {
      system_id: 1,
      planet_id: 6,
      moon_name: "Hyperion",
      order: "E",
      args: [0.04, 32, 16],
      position: [0.7, 0, 1.5],
      color: "#5f7470",
    },
    {
      system_id: 1,
      planet_id: 7,
      moon_name: "Miranda",
      order: "A",
      args: [0.04, 32, 16],
      position: [1, 0, 0.3],
      color: "#5f7470",
    },
    {
      system_id: 1,
      planet_id: 7,
      moon_name: "Ariel",
      order: "B",
      args: [0.04, 32, 16],
      position: [-1.1, 0, -0.3],
      color: "#5f7470",
    },
    {
      system_id: 1,
      planet_id: 7,
      moon_name: "Umbriel",
      order: "C",
      args: [0.04, 32, 16],
      position: [-0.3, 0, -1],
      color: "#5f7470",
    },
    {
      system_id: 1,
      planet_id: 7,
      moon_name: "Titania",
      order: "D",
      args: [0.04, 32, 16],
      position: [-1, 0, 0.8],
      color: "#5f7470",
    },
    {
      system_id: 1,
      planet_id: 7,
      moon_name: "Oberon",
      order: "E",
      args: [0.04, 32, 16],
      position: [0.4, 0, 1.3],
      color: "#5f7470",
    },
    {
      system_id: 1,
      planet_id: 8,
      moon_name: "Triton",
      args: [0.04, 32, 16],
      order: "A",
      position: [-0.8, 0, -0.6],
      color: "#e2711d",
    },
    {
      system_id: 1,
      planet_id: 9,
      moon_name: "Charon",
      order: "A",
      args: [0.04, 32, 16],
      position: [0.9, 0, -0.6],
      color: "#5c677d",
    },
  ]);
};
