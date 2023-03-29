import * as TypeGraphQL from "type-graphql";
import { Food } from "../../../models/Food";
import { FoodInMeal } from "../../../models/FoodInMeal";
import { FoodInRecipe } from "../../../models/FoodInRecipe";
import { FoodMealsArgs } from "./args/FoodMealsArgs";
import { FoodRecipesArgs } from "./args/FoodRecipesArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Food)
export class FoodRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [FoodInMeal], {
    nullable: false
  })
  async meals(@TypeGraphQL.Root() food: Food, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FoodMealsArgs): Promise<FoodInMeal[]> {
    return getPrismaFromContext(ctx).food.findUnique({
      where: {
        id: food.id,
      },
    }).meals(args);
  }

  @TypeGraphQL.FieldResolver(_type => [FoodInRecipe], {
    nullable: false
  })
  async recipes(@TypeGraphQL.Root() food: Food, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FoodRecipesArgs): Promise<FoodInRecipe[]> {
    return getPrismaFromContext(ctx).food.findUnique({
      where: {
        id: food.id,
      },
    }).recipes(args);
  }
}