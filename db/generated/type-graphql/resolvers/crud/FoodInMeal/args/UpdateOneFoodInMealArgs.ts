import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FoodInMealUpdateInput } from "../../../inputs/FoodInMealUpdateInput";
import { FoodInMealWhereUniqueInput } from "../../../inputs/FoodInMealWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneFoodInMealArgs {
  @TypeGraphQL.Field(_type => FoodInMealUpdateInput, {
    nullable: false
  })
  data!: FoodInMealUpdateInput;

  @TypeGraphQL.Field(_type => FoodInMealWhereUniqueInput, {
    nullable: false
  })
  where!: FoodInMealWhereUniqueInput;
}
