import BaseModel from "@/db/models/BaseModel";
import Moon from "@/db/models/Moon";
import System from "@/db/models/System";

class Planet extends BaseModel {
  static get tableName() {
    return "planets";
  }
  static get relationMappings() {
    return {
      system: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: System,
        join: {
          from: "planets.systemId",
          to: "systems.id",
        },
      },
      moons: {
        relation: BaseModel.HasManyRelation,
        modelClass: Moon,
        join: {
          from: "planets.id",
          to: "moons.planetId",
        },
      },
    };
  }
}

export default Planet;
