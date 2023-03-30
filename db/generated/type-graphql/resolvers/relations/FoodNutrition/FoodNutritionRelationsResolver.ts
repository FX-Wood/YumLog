import * as TypeGraphQL from "type-graphql";
import { Food } from "../../../models/Food";
import { FoodNutrition } from "../../../models/FoodNutrition";
import { Unit } from "../../../models/Unit";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => FoodNutrition)
export class FoodNutritionRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Food, {
    nullable: false
  })
  async food(@TypeGraphQL.Root() foodNutrition: FoodNutrition, @TypeGraphQL.Ctx() ctx: any): Promise<Food> {
    return getPrismaFromContext(ctx).foodNutrition.findUnique({
      where: {
        id: foodNutrition.id,
      },
    }).food({});
  }

  @TypeGraphQL.FieldResolver(_type => Unit, {
    nullable: false
  })
  async unit(@TypeGraphQL.Root() foodNutrition: FoodNutrition, @TypeGraphQL.Ctx() ctx: any): Promise<Unit> {
    return getPrismaFromContext(ctx).foodNutrition.findUnique({
      where: {
        id: foodNutrition.id,
      },
    }).unit({});
  }
}
