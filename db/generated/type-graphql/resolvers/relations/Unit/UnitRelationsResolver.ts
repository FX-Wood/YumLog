import * as TypeGraphQL from "type-graphql";
import { FoodInMeal } from "../../../models/FoodInMeal";
import { FoodInRecipe } from "../../../models/FoodInRecipe";
import { Unit } from "../../../models/Unit";
import { UnitMealFoodsArgs } from "./args/UnitMealFoodsArgs";
import { UnitRecipeFoodsArgs } from "./args/UnitRecipeFoodsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Unit)
export class UnitRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [FoodInMeal], {
    nullable: false
  })
  async mealFoods(@TypeGraphQL.Root() unit: Unit, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UnitMealFoodsArgs): Promise<FoodInMeal[]> {
    return getPrismaFromContext(ctx).unit.findUnique({
      where: {
        id: unit.id,
      },
    }).mealFoods(args);
  }

  @TypeGraphQL.FieldResolver(_type => [FoodInRecipe], {
    nullable: false
  })
  async recipeFoods(@TypeGraphQL.Root() unit: Unit, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UnitRecipeFoodsArgs): Promise<FoodInRecipe[]> {
    return getPrismaFromContext(ctx).unit.findUnique({
      where: {
        id: unit.id,
      },
    }).recipeFoods(args);
  }
}
