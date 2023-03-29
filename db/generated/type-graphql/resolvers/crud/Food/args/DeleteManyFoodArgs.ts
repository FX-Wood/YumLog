import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FoodWhereInput } from "../../../inputs/FoodWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyFoodArgs {
  @TypeGraphQL.Field(_type => FoodWhereInput, {
    nullable: true
  })
  where?: FoodWhereInput | undefined;
}
