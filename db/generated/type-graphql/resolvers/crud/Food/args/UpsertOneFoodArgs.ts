import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FoodCreateInput } from "../../../inputs/FoodCreateInput";
import { FoodUpdateInput } from "../../../inputs/FoodUpdateInput";
import { FoodWhereUniqueInput } from "../../../inputs/FoodWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneFoodArgs {
  @TypeGraphQL.Field(_type => FoodWhereUniqueInput, {
    nullable: false
  })
  where!: FoodWhereUniqueInput;

  @TypeGraphQL.Field(_type => FoodCreateInput, {
    nullable: false
  })
  create!: FoodCreateInput;

  @TypeGraphQL.Field(_type => FoodUpdateInput, {
    nullable: false
  })
  update!: FoodUpdateInput;
}
