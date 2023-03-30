import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FoodInMeal } from "../../../models/FoodInMeal";
import { Meal } from "../../../models/Meal";
import { RecipeInMeal } from "../../../models/RecipeInMeal";
import { User } from "../../../models/User";
import { MealFoodsArgs } from "./args/MealFoodsArgs";
import { MealRecipesArgs } from "./args/MealRecipesArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Meal)
export class MealRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() meal: Meal, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<User> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).meal.findUniqueOrThrow({
      where: {
        id: meal.id,
      },
    }).user({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [FoodInMeal], {
    nullable: false
  })
  async foods(@TypeGraphQL.Root() meal: Meal, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: MealFoodsArgs): Promise<FoodInMeal[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).meal.findUniqueOrThrow({
      where: {
        id: meal.id,
      },
    }).foods({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [RecipeInMeal], {
    nullable: false
  })
  async recipes(@TypeGraphQL.Root() meal: Meal, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: MealRecipesArgs): Promise<RecipeInMeal[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).meal.findUniqueOrThrow({
      where: {
        id: meal.id,
      },
    }).recipes({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
