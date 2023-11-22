/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => {
  return knex.schema
    .createTable("systems", (table) => {
      table.increments("id").primary();
      table.string("system_name").notNullable();
      table.integer("planets").notNullable();
      table.integer("moons").notNullable();
      table.timestamps(true, true);
    })
    .createTable("stars", (table) => {
      table.increments("id").primary();
      table.integer("system_id").references("id").inTable("systems");
      table.string("star_name").notNullable();
      table.specificType("args", "FLOAT[]").notNullable();
      table.specificType("position", "FLOAT[]").notNullable();
      table.string("color").notNullable();
      table.timestamps(true, true);
    })
    .createTable("planets", (table) => {
      table.increments("id").primary();
      table.integer("system_id").references("id").inTable("systems");
      table.string("planet_name").notNullable();
      table.string("order").notNullable();
      table.specificType("args", "FLOAT[]").notNullable();
      table.specificType("position", "FLOAT[]").notNullable();
      table.string("color").notNullable();
      table.timestamps(true, true);
    })
    .createTable("moons", (table) => {
      table.increments("id").primary();
      table.integer("system_id").references("id").inTable("systems");
      table.integer("planet_id").references("id").inTable("planets");
      table.string("moon_name").notNullable();
      table.string("order").notNullable();
      table.specificType("args", "FLOAT[]").notNullable();
      table.specificType("position", "FLOAT[]").notNullable();
      table.string("color").notNullable();
      table.timestamps(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => {
  return knex.schema
    .dropTableIfExists("moons")
    .dropTableIfExists("planets")
    .dropTableIfExists("stars")
    .dropTableIfExists("systems");
};
