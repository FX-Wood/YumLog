import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FoodCreateInput } from "../../../inputs/FoodCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneFoodArgs {
  @TypeGraphQL.Field(_type => FoodCreateInput, {
    nullable: false
  })
  data!: FoodCreateInput;
}
