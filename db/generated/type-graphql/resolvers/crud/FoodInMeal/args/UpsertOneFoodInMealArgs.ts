import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FoodInMealCreateInput } from "../../../inputs/FoodInMealCreateInput";
import { FoodInMealUpdateInput } from "../../../inputs/FoodInMealUpdateInput";
import { FoodInMealWhereUniqueInput } from "../../../inputs/FoodInMealWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneFoodInMealArgs {
  @TypeGraphQL.Field(_type => FoodInMealWhereUniqueInput, {
    nullable: false
  })
  where!: FoodInMealWhereUniqueInput;

  @TypeGraphQL.Field(_type => FoodInMealCreateInput, {
    nullable: false
  })
  create!: FoodInMealCreateInput;

  @TypeGraphQL.Field(_type => FoodInMealUpdateInput, {
    nullable: false
  })
  update!: FoodInMealUpdateInput;
}
