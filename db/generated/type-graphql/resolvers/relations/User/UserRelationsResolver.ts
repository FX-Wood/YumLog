import * as TypeGraphQL from "type-graphql";
import { Meal } from "../../../models/Meal";
import { Profile } from "../../../models/Profile";
import { Recipe } from "../../../models/Recipe";
import { User } from "../../../models/User";
import { WeighIn } from "../../../models/WeighIn";
import { Workout } from "../../../models/Workout";
import { UserMealsArgs } from "./args/UserMealsArgs";
import { UserRecipesArgs } from "./args/UserRecipesArgs";
import { UserWeighInsArgs } from "./args/UserWeighInsArgs";
import { UserWorkoutsArgs } from "./args/UserWorkoutsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => User)
export class UserRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Profile, {
    nullable: true
  })
  async profile(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any): Promise<Profile | null> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).profile({});
  }

  @TypeGraphQL.FieldResolver(_type => [Meal], {
    nullable: false
  })
  async meals(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserMealsArgs): Promise<Meal[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).meals(args);
  }

  @TypeGraphQL.FieldResolver(_type => [WeighIn], {
    nullable: false
  })
  async weighIns(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserWeighInsArgs): Promise<WeighIn[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).weighIns(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Workout], {
    nullable: false
  })
  async workouts(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserWorkoutsArgs): Promise<Workout[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).workouts(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Recipe], {
    nullable: false
  })
  async recipes(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserRecipesArgs): Promise<Recipe[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).recipes(args);
  }
}
