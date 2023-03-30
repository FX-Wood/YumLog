import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateFoodNutritionArgs } from "./args/AggregateFoodNutritionArgs";
import { CreateManyFoodNutritionArgs } from "./args/CreateManyFoodNutritionArgs";
import { CreateOneFoodNutritionArgs } from "./args/CreateOneFoodNutritionArgs";
import { DeleteManyFoodNutritionArgs } from "./args/DeleteManyFoodNutritionArgs";
import { DeleteOneFoodNutritionArgs } from "./args/DeleteOneFoodNutritionArgs";
import { FindFirstFoodNutritionArgs } from "./args/FindFirstFoodNutritionArgs";
import { FindManyFoodNutritionArgs } from "./args/FindManyFoodNutritionArgs";
import { FindUniqueFoodNutritionArgs } from "./args/FindUniqueFoodNutritionArgs";
import { GroupByFoodNutritionArgs } from "./args/GroupByFoodNutritionArgs";
import { UpdateManyFoodNutritionArgs } from "./args/UpdateManyFoodNutritionArgs";
import { UpdateOneFoodNutritionArgs } from "./args/UpdateOneFoodNutritionArgs";
import { UpsertOneFoodNutritionArgs } from "./args/UpsertOneFoodNutritionArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { FoodNutrition } from "../../../models/FoodNutrition";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateFoodNutrition } from "../../outputs/AggregateFoodNutrition";
import { FoodNutritionGroupBy } from "../../outputs/FoodNutritionGroupBy";

@TypeGraphQL.Resolver(_of => FoodNutrition)
export class FoodNutritionCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateFoodNutrition, {
    nullable: false
  })
  async aggregateFoodNutrition(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateFoodNutritionArgs): Promise<AggregateFoodNutrition> {
    return getPrismaFromContext(ctx).foodNutrition.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyFoodNutrition(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyFoodNutritionArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).foodNutrition.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => FoodNutrition, {
    nullable: false
  })
  async createOneFoodNutrition(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneFoodNutritionArgs): Promise<FoodNutrition> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).foodNutrition.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyFoodNutrition(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyFoodNutritionArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).foodNutrition.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => FoodNutrition, {
    nullable: true
  })
  async deleteOneFoodNutrition(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneFoodNutritionArgs): Promise<FoodNutrition | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).foodNutrition.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => FoodNutrition, {
    nullable: true
  })
  async findFirstFoodNutrition(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstFoodNutritionArgs): Promise<FoodNutrition | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).foodNutrition.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [FoodNutrition], {
    nullable: false
  })
  async foodNutritions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyFoodNutritionArgs): Promise<FoodNutrition[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).foodNutrition.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => FoodNutrition, {
    nullable: true
  })
  async foodNutrition(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueFoodNutritionArgs): Promise<FoodNutrition | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).foodNutrition.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [FoodNutritionGroupBy], {
    nullable: false
  })
  async groupByFoodNutrition(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByFoodNutritionArgs): Promise<FoodNutritionGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).foodNutrition.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyFoodNutrition(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyFoodNutritionArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).foodNutrition.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => FoodNutrition, {
    nullable: true
  })
  async updateOneFoodNutrition(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneFoodNutritionArgs): Promise<FoodNutrition | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).foodNutrition.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => FoodNutrition, {
    nullable: false
  })
  async upsertOneFoodNutrition(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneFoodNutritionArgs): Promise<FoodNutrition> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).foodNutrition.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
