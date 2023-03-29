import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateOneFoodInRecipeArgs } from "./args/CreateOneFoodInRecipeArgs";
import { FoodInRecipe } from "../../../models/FoodInRecipe";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => FoodInRecipe)
export class CreateOneFoodInRecipeResolver {
  @TypeGraphQL.Mutation(_returns => FoodInRecipe, {
    nullable: false
  })
  async createOneFoodInRecipe(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneFoodInRecipeArgs): Promise<FoodInRecipe> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).foodInRecipe.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
