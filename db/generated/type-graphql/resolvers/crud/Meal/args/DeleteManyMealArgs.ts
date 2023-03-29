import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MealWhereInput } from "../../../inputs/MealWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyMealArgs {
  @TypeGraphQL.Field(_type => MealWhereInput, {
    nullable: true
  })
  where?: MealWhereInput | undefined;
}
