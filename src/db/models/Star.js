import BaseModel from "@/db/models/BaseModel";
import System from "@/db/models/System";

class Star extends BaseModel {
  static get tableName() {
    return "stars";
  }
  static get relationMappings() {
    return {
      system: {
        relation: BaseModel.HasOneRelation,
        modelClass: System,
        join: {
          from: "stars.systemId",
          to: "systems.id",
        },
      },
    };
  }
}

export default Star;
