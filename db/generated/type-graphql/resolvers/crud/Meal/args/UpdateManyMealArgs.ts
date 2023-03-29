import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MealUpdateManyMutationInput } from "../../../inputs/MealUpdateManyMutationInput";
import { MealWhereInput } from "../../../inputs/MealWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyMealArgs {
  @TypeGraphQL.Field(_type => MealUpdateManyMutationInput, {
    nullable: false
  })
  data!: MealUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => MealWhereInput, {
    nullable: true
  })
  where?: MealWhereInput | undefined;
}
