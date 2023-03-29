import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FoodInRecipeOrderByWithRelationInput } from "../../../inputs/FoodInRecipeOrderByWithRelationInput";
import { FoodInRecipeWhereInput } from "../../../inputs/FoodInRecipeWhereInput";
import { FoodInRecipeWhereUniqueInput } from "../../../inputs/FoodInRecipeWhereUniqueInput";
import { FoodInRecipeScalarFieldEnum } from "../../../../enums/FoodInRecipeScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyFoodInRecipeArgs {
  @TypeGraphQL.Field(_type => FoodInRecipeWhereInput, {
    nullable: true
  })
  where?: FoodInRecipeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [FoodInRecipeOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: FoodInRecipeOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => FoodInRecipeWhereUniqueInput, {
    nullable: true
  })
  cursor?: FoodInRecipeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [FoodInRecipeScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "foodId" | "recipeId" | "quantity" | "unitId"> | undefined;
}
