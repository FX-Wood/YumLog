import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FoodInMealOrderByWithRelationInput } from "../../../inputs/FoodInMealOrderByWithRelationInput";
import { FoodInMealWhereInput } from "../../../inputs/FoodInMealWhereInput";
import { FoodInMealWhereUniqueInput } from "../../../inputs/FoodInMealWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateFoodInMealArgs {
  @TypeGraphQL.Field(_type => FoodInMealWhereInput, {
    nullable: true
  })
  where?: FoodInMealWhereInput | undefined;

  @TypeGraphQL.Field(_type => [FoodInMealOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: FoodInMealOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => FoodInMealWhereUniqueInput, {
    nullable: true
  })
  cursor?: FoodInMealWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
