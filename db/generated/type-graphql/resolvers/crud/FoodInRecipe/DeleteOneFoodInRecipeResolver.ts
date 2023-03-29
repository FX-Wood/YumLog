import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeleteOneFoodInRecipeArgs } from "./args/DeleteOneFoodInRecipeArgs";
import { FoodInRecipe } from "../../../models/FoodInRecipe";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => FoodInRecipe)
export class DeleteOneFoodInRecipeResolver {
  @TypeGraphQL.Mutation(_returns => FoodInRecipe, {
    nullable: true
  })
  async deleteOneFoodInRecipe(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneFoodInRecipeArgs): Promise<FoodInRecipe | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).foodInRecipe.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
