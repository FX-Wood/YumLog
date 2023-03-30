import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateFoodInRecipeArgs } from "./args/AggregateFoodInRecipeArgs";
import { CreateManyFoodInRecipeArgs } from "./args/CreateManyFoodInRecipeArgs";
import { CreateOneFoodInRecipeArgs } from "./args/CreateOneFoodInRecipeArgs";
import { DeleteManyFoodInRecipeArgs } from "./args/DeleteManyFoodInRecipeArgs";
import { DeleteOneFoodInRecipeArgs } from "./args/DeleteOneFoodInRecipeArgs";
import { FindFirstFoodInRecipeArgs } from "./args/FindFirstFoodInRecipeArgs";
import { FindFirstFoodInRecipeOrThrowArgs } from "./args/FindFirstFoodInRecipeOrThrowArgs";
import { FindManyFoodInRecipeArgs } from "./args/FindManyFoodInRecipeArgs";
import { FindUniqueFoodInRecipeArgs } from "./args/FindUniqueFoodInRecipeArgs";
import { FindUniqueFoodInRecipeOrThrowArgs } from "./args/FindUniqueFoodInRecipeOrThrowArgs";
import { GroupByFoodInRecipeArgs } from "./args/GroupByFoodInRecipeArgs";
import { UpdateManyFoodInRecipeArgs } from "./args/UpdateManyFoodInRecipeArgs";
import { UpdateOneFoodInRecipeArgs } from "./args/UpdateOneFoodInRecipeArgs";
import { UpsertOneFoodInRecipeArgs } from "./args/UpsertOneFoodInRecipeArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { FoodInRecipe } from "../../../models/FoodInRecipe";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateFoodInRecipe } from "../../outputs/AggregateFoodInRecipe";
import { FoodInRecipeGroupBy } from "../../outputs/FoodInRecipeGroupBy";

@TypeGraphQL.Resolver(_of => FoodInRecipe)
export class FoodInRecipeCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateFoodInRecipe, {
    nullable: false
  })
  async aggregateFoodInRecipe(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateFoodInRecipeArgs): Promise<AggregateFoodInRecipe> {
    return getPrismaFromContext(ctx).foodInRecipe.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyFoodInRecipe(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyFoodInRecipeArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).foodInRecipe.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => FoodInRecipe, {
    nullable: false
  })
  async createOneFoodInRecipe(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneFoodInRecipeArgs): Promise<FoodInRecipe> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).foodInRecipe.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyFoodInRecipe(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyFoodInRecipeArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).foodInRecipe.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => FoodInRecipe, {
    nullable: true
  })
  async deleteOneFoodInRecipe(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneFoodInRecipeArgs): Promise<FoodInRecipe | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).foodInRecipe.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => FoodInRecipe, {
    nullable: true
  })
  async findFirstFoodInRecipe(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstFoodInRecipeArgs): Promise<FoodInRecipe | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).foodInRecipe.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => FoodInRecipe, {
    nullable: true
  })
  async findFirstFoodInRecipeOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstFoodInRecipeOrThrowArgs): Promise<FoodInRecipe | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).foodInRecipe.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [FoodInRecipe], {
    nullable: false
  })
  async foodInRecipes(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyFoodInRecipeArgs): Promise<FoodInRecipe[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).foodInRecipe.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => FoodInRecipe, {
    nullable: true
  })
  async foodInRecipe(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueFoodInRecipeArgs): Promise<FoodInRecipe | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).foodInRecipe.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => FoodInRecipe, {
    nullable: true
  })
  async getFoodInRecipe(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueFoodInRecipeOrThrowArgs): Promise<FoodInRecipe | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).foodInRecipe.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [FoodInRecipeGroupBy], {
    nullable: false
  })
  async groupByFoodInRecipe(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByFoodInRecipeArgs): Promise<FoodInRecipeGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).foodInRecipe.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyFoodInRecipe(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyFoodInRecipeArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).foodInRecipe.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => FoodInRecipe, {
    nullable: true
  })
  async updateOneFoodInRecipe(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneFoodInRecipeArgs): Promise<FoodInRecipe | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).foodInRecipe.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => FoodInRecipe, {
    nullable: false
  })
  async upsertOneFoodInRecipe(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneFoodInRecipeArgs): Promise<FoodInRecipe> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).foodInRecipe.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
