import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MealUpdateInput } from "../../../inputs/MealUpdateInput";
import { MealWhereUniqueInput } from "../../../inputs/MealWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneMealArgs {
  @TypeGraphQL.Field(_type => MealUpdateInput, {
    nullable: false
  })
  data!: MealUpdateInput;

  @TypeGraphQL.Field(_type => MealWhereUniqueInput, {
    nullable: false
  })
  where!: MealWhereUniqueInput;
}
