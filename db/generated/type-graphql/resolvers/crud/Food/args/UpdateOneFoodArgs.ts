import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FoodUpdateInput } from "../../../inputs/FoodUpdateInput";
import { FoodWhereUniqueInput } from "../../../inputs/FoodWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneFoodArgs {
  @TypeGraphQL.Field(_type => FoodUpdateInput, {
    nullable: false
  })
  data!: FoodUpdateInput;

  @TypeGraphQL.Field(_type => FoodWhereUniqueInput, {
    nullable: false
  })
  where!: FoodWhereUniqueInput;
}
