import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Food } from "../../../models/Food";
import { FoodNutrition } from "../../../models/FoodNutrition";
import { Unit } from "../../../models/Unit";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => FoodNutrition)
export class FoodNutritionRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Food, {
    nullable: false
  })
  async food(@TypeGraphQL.Root() foodNutrition: FoodNutrition, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Food> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).foodNutrition.findUniqueOrThrow({
      where: {
        id: foodNutrition.id,
      },
    }).food({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Unit, {
    nullable: false
  })
  async unit(@TypeGraphQL.Root() foodNutrition: FoodNutrition, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Unit> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).foodNutrition.findUniqueOrThrow({
      where: {
        id: foodNutrition.id,
      },
    }).unit({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
