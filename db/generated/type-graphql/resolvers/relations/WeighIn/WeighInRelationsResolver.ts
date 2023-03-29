import * as TypeGraphQL from "type-graphql";
import { User } from "../../../models/User";
import { WeighIn } from "../../../models/WeighIn";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => WeighIn)
export class WeighInRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() weighIn: WeighIn, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).weighIn.findUnique({
      where: {
        id: weighIn.id,
      },
    }).user({});
  }
}
