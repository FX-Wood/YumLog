import * as TypeGraphQL from "type-graphql";
import { FoodInMeal } from "../../../models/FoodInMeal";
import { Meal } from "../../../models/Meal";
import { User } from "../../../models/User";
import { MealFoodsArgs } from "./args/MealFoodsArgs";
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
}
