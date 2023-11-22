import knex from "knex";
import { Model } from "objection";
import { development } from "../../../knexfile";

class BaseModel extends Model {}

BaseModel.knex(knex(development));

export default BaseModel;
