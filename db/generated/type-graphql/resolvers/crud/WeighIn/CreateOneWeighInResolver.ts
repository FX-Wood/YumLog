import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateOneWeighInArgs } from "./args/CreateOneWeighInArgs";
import { WeighIn } from "../../../models/WeighIn";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => WeighIn)
export class CreateOneWeighInResolver {
  @TypeGraphQL.Mutation(_returns => WeighIn, {
    nullable: false
  })
  async createOneWeighIn(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneWeighInArgs): Promise<WeighIn> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).weighIn.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
