import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FoodOrderByWithRelationInput } from "../../../inputs/FoodOrderByWithRelationInput";
import { FoodWhereInput } from "../../../inputs/FoodWhereInput";
import { FoodWhereUniqueInput } from "../../../inputs/FoodWhereUniqueInput";
import { FoodScalarFieldEnum } from "../../../../enums/FoodScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstFoodArgs {
  @TypeGraphQL.Field(_type => FoodWhereInput, {
    nullable: true
  })
  where?: FoodWhereInput | undefined;

  @TypeGraphQL.Field(_type => [FoodOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: FoodOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => FoodWhereUniqueInput, {
    nullable: true
  })
  cursor?: FoodWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [FoodScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name" | "brand"> | undefined;
}
