import BaseModel from "@/db/models/BaseModel";
import Planet from "@/db/models/Planet";
import Star from "@/db/models/Star";

class System extends BaseModel {
  static get tableName() {
    return "systems";
  }

  static get relationMappings() {
    return {
      star: {
        relation: BaseModel.HasOneRelation,
        modelClass: Star,
        join: {
          from: "systems.id",
          to: "stars.systemId",
        },
      },
      planets: {
        relation: BaseModel.HasManyRelation,
        modelClass: Planet,
        join: {
          from: "systems.id",
          to: "planets.systemId",
        },
      },
    };
  }
}

export default System;
