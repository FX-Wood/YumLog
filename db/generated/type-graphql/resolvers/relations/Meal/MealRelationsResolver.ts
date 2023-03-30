import * as TypeGraphQL from "type-graphql";
import { FoodInMeal } from "../../../models/FoodInMeal";
import { Meal } from "../../../models/Meal";
import { RecipeInMeal } from "../../../models/RecipeInMeal";
import { User } from "../../../models/User";
import { MealFoodsArgs } from "./args/MealFoodsArgs";
import { MealRecipesArgs } from "./args/MealRecipesArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Meal)
export class MealRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() meal: Meal, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).meal.findUnique({
      where: {
        id: meal.id,
      },
    }).user({});
  }

  @TypeGraphQL.FieldResolver(_type => [FoodInMeal], {
    nullable: false
  })
  async foods(@TypeGraphQL.Root() meal: Meal, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: MealFoodsArgs): Promise<FoodInMeal[]> {
    return getPrismaFromContext(ctx).meal.findUnique({
      where: {
        id: meal.id,
      },
    }).foods(args);
  }

  @TypeGraphQL.FieldResolver(_type => [RecipeInMeal], {
    nullable: false
  })
  async recipes(@TypeGraphQL.Root() meal: Meal, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: MealRecipesArgs): Promise<RecipeInMeal[]> {
    return getPrismaFromContext(ctx).meal.findUnique({
      where: {
        id: meal.id,
      },
    }).recipes(args);
  }
}
