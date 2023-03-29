import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FoodUpdateManyMutationInput } from "../../../inputs/FoodUpdateManyMutationInput";
import { FoodWhereInput } from "../../../inputs/FoodWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyFoodArgs {
  @TypeGraphQL.Field(_type => FoodUpdateManyMutationInput, {
    nullable: false
  })
  data!: FoodUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => FoodWhereInput, {
    nullable: true
  })
  where?: FoodWhereInput | undefined;
}
