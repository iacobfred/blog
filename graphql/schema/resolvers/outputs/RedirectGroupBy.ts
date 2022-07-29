import * as TypeGraphQL from "type-graphql-v2-fork";
import { RedirectAvgAggregate } from "../outputs/RedirectAvgAggregate";
import { RedirectCountAggregate } from "../outputs/RedirectCountAggregate";
import { RedirectMaxAggregate } from "../outputs/RedirectMaxAggregate";
import { RedirectMinAggregate } from "../outputs/RedirectMinAggregate";
import { RedirectSumAggregate } from "../outputs/RedirectSumAggregate";

@TypeGraphQL.ObjectType("RedirectGroupBy", {
  isAbstract: true,
})
export class RedirectGroupBy {
  @TypeGraphQL.Field(() => String, { nullable: false })
  id!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  old_path!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  new_path!: string;

  @TypeGraphQL.Field(() => RedirectCountAggregate, { nullable: true })
  _count!: RedirectCountAggregate | null;

  @TypeGraphQL.Field(() => RedirectAvgAggregate, { nullable: true })
  _avg!: RedirectAvgAggregate | null;

  @TypeGraphQL.Field(() => RedirectSumAggregate, { nullable: true })
  _sum!: RedirectSumAggregate | null;

  @TypeGraphQL.Field(() => RedirectMinAggregate, { nullable: true })
  _min!: RedirectMinAggregate | null;

  @TypeGraphQL.Field(() => RedirectMaxAggregate, { nullable: true })
  _max!: RedirectMaxAggregate | null;
}
