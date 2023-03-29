import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FoodInMealUpdateManyMutationInput } from "../../../inputs/FoodInMealUpdateManyMutationInput";
import { FoodInMealWhereInput } from "../../../inputs/FoodInMealWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyFoodInMealArgs {
  @TypeGraphQL.Field(_type => FoodInMealUpdateManyMutationInput, {
    nullable: false
  })
  data!: FoodInMealUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => FoodInMealWhereInput, {
    nullable: true
  })
  where?: FoodInMealWhereInput | undefined;
}
