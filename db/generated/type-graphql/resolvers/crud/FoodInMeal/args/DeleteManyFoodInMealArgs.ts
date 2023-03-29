import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FoodInMealWhereInput } from "../../../inputs/FoodInMealWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyFoodInMealArgs {
  @TypeGraphQL.Field(_type => FoodInMealWhereInput, {
    nullable: true
  })
  where?: FoodInMealWhereInput | undefined;
}
