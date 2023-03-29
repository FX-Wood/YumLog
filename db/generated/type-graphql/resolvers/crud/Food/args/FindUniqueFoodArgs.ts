import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FoodWhereUniqueInput } from "../../../inputs/FoodWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueFoodArgs {
  @TypeGraphQL.Field(_type => FoodWhereUniqueInput, {
    nullable: false
  })
  where!: FoodWhereUniqueInput;
}
