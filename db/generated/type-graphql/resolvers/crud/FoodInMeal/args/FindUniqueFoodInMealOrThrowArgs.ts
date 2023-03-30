import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FoodInMealWhereUniqueInput } from "../../../inputs/FoodInMealWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueFoodInMealOrThrowArgs {
  @TypeGraphQL.Field(_type => FoodInMealWhereUniqueInput, {
    nullable: false
  })
  where!: FoodInMealWhereUniqueInput;
}
