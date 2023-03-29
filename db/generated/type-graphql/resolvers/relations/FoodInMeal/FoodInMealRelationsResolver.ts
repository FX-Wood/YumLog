import * as TypeGraphQL from "type-graphql";
import { Food } from "../../../models/Food";
import { FoodInMeal } from "../../../models/FoodInMeal";
import { Meal } from "../../../models/Meal";
import { Unit } from "../../../models/Unit";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => FoodInMeal)
export class FoodInMealRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Food, {
    nullable: false
  })
  async food(@TypeGraphQL.Root() foodInMeal: FoodInMeal, @TypeGraphQL.Ctx() ctx: any): Promise<Food> {
    return getPrismaFromContext(ctx).foodInMeal.findUnique({
      where: {
        id: foodInMeal.id,
      },
    }).food({});
  }

  @TypeGraphQL.FieldResolver(_type => Meal, {
    nullable: false
  })
  async meal(@TypeGraphQL.Root() foodInMeal: FoodInMeal, @TypeGraphQL.Ctx() ctx: any): Promise<Meal> {
    return getPrismaFromContext(ctx).foodInMeal.findUnique({
      where: {
        id: foodInMeal.id,
      },
    }).meal({});
  }

  @TypeGraphQL.FieldResolver(_type => Unit, {
    nullable: false
  })
  async unit(@TypeGraphQL.Root() foodInMeal: FoodInMeal, @TypeGraphQL.Ctx() ctx: any): Promise<Unit> {
    return getPrismaFromContext(ctx).foodInMeal.findUnique({
      where: {
        id: foodInMeal.id,
      },
    }).unit({});
  }
}
