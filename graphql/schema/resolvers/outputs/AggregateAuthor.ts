import * as TypeGraphQL from "type-graphql-v2-fork";
import { AuthorAvgAggregate } from "../outputs/AuthorAvgAggregate";
import { AuthorCountAggregate } from "../outputs/AuthorCountAggregate";
import { AuthorMaxAggregate } from "../outputs/AuthorMaxAggregate";
import { AuthorMinAggregate } from "../outputs/AuthorMinAggregate";
import { AuthorSumAggregate } from "../outputs/AuthorSumAggregate";

@TypeGraphQL.ObjectType("AggregateAuthor", {
  isAbstract: true,
})
export class AggregateAuthor {
  @TypeGraphQL.Field(() => AuthorCountAggregate, { nullable: true })
  _count!: AuthorCountAggregate | null;

  @TypeGraphQL.Field(() => AuthorAvgAggregate, { nullable: true })
  _avg!: AuthorAvgAggregate | null;

  @TypeGraphQL.Field(() => AuthorSumAggregate, { nullable: true })
  _sum!: AuthorSumAggregate | null;

  @TypeGraphQL.Field(() => AuthorMinAggregate, { nullable: true })
  _min!: AuthorMinAggregate | null;

  @TypeGraphQL.Field(() => AuthorMaxAggregate, { nullable: true })
  _max!: AuthorMaxAggregate | null;
}
