import BaseModel from "@/db/models/BaseModel";
import Planet from "@/db/models/Planet";

class Moon extends BaseModel {
  static get tableName() {
    return "moons";
  }
  static get relationMappings() {
    return {
      planet: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: Planet,
        join: {
          from: "moons.planetId",
          to: "planets.id",
        },
      },
    };
  }
}

export default Moon;
