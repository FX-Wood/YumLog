import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MealCreateInput } from "../../../inputs/MealCreateInput";
import { MealUpdateInput } from "../../../inputs/MealUpdateInput";
import { MealWhereUniqueInput } from "../../../inputs/MealWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneMealArgs {
  @TypeGraphQL.Field(_type => MealWhereUniqueInput, {
    nullable: false
  })
  where!: MealWhereUniqueInput;

  @TypeGraphQL.Field(_type => MealCreateInput, {
    nullable: false
  })
  create!: MealCreateInput;

  @TypeGraphQL.Field(_type => MealUpdateInput, {
    nullable: false
  })
  update!: MealUpdateInput;
}
