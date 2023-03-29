import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeleteOneWeighInArgs } from "./args/DeleteOneWeighInArgs";
import { WeighIn } from "../../../models/WeighIn";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => WeighIn)
export class DeleteOneWeighInResolver {
  @TypeGraphQL.Mutation(_returns => WeighIn, {
    nullable: true
  })
  async deleteOneWeighIn(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneWeighInArgs): Promise<WeighIn | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).weighIn.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
