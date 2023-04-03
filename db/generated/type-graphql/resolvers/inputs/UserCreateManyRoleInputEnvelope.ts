import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateManyRoleInput } from "../inputs/UserCreateManyRoleInput";

@TypeGraphQL.InputType("UserCreateManyRoleInputEnvelope", {
  isAbstract: true
})
export class UserCreateManyRoleInputEnvelope {
  @TypeGraphQL.Field(_type => [UserCreateManyRoleInput], {
    nullable: false
  })
  data!: UserCreateManyRoleInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
