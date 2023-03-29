import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MealWhereUniqueInput } from "../../../inputs/MealWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneMealArgs {
  @TypeGraphQL.Field(_type => MealWhereUniqueInput, {
    nullable: false
  })
  where!: MealWhereUniqueInput;
}
