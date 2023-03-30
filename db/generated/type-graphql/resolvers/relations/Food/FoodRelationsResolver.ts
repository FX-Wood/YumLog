import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Food } from "../../../models/Food";
import { FoodInMeal } from "../../../models/FoodInMeal";
import { FoodInRecipe } from "../../../models/FoodInRecipe";
import { FoodNutrition } from "../../../models/FoodNutrition";
import { FoodMealsArgs } from "./args/FoodMealsArgs";
import { FoodNutritionArgs } from "./args/FoodNutritionArgs";
import { FoodRecipesArgs } from "./args/FoodRecipesArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Food)
export class FoodRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [FoodNutrition], {
    nullable: false
  })
  async nutrition(@TypeGraphQL.Root() food: Food, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FoodNutritionArgs): Promise<FoodNutrition[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).food.findUniqueOrThrow({
      where: {
        id: food.id,
      },
    }).nutrition({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [FoodInMeal], {
    nullable: false
  })
  async meals(@TypeGraphQL.Root() food: Food, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FoodMealsArgs): Promise<FoodInMeal[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).food.findUniqueOrThrow({
      where: {
        id: food.id,
      },
    }).meals({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [FoodInRecipe], {
    nullable: false
  })
  async recipes(@TypeGraphQL.Root() food: Food, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FoodRecipesArgs): Promise<FoodInRecipe[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).food.findUniqueOrThrow({
      where: {
        id: food.id,
      },
    }).recipes({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
