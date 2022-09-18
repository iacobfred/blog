/* Do not edit this file. It was generated programmatically. */

import ListItemModel from "@web/generated/models/ListItem";
import UserModel from "@web/generated/models/User";
import {
  createListItem as _createListItem,
  findListItem as _findListItem,
  updateListItem as _updateListItem,
  upsertListItem as _upsertListItem,
} from "@web/generated/shortcuts/listItem.shortcuts";
import type { GqlContext } from "@web/graphql/context";
import {
  FindManyListItemArgs,
  FindUniqueListItemArgs,
  ListItemCreationArgs,
  ListItemUpdateArgs,
  ListItemUpsertionArgs,
} from "@web/graphql/generated/args/listItem.args";
import ListItem from "@web/graphql/generated/types/ListItem";
import { convertFilterForMongo } from "@web/graphql/schema/helpers";
import { ObjectIdScalar } from "@web/graphql/schema/scalars";
import type { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.Resolver(() => ListItem)
export class ListItemResolver {
  @TypeGraphQL.FieldResolver(() => ObjectIdScalar)
  id(@TypeGraphQL.Root() listItem: ListItem) {
    return listItem._id;
  }

  @TypeGraphQL.Query(() => ListItem, { nullable: true })
  async listItem(
    @TypeGraphQL.Ctx() _ctx: GqlContext,
    @TypeGraphQL.Info() _info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueListItemArgs
  ) {
    return await _findListItem(args);
  }

  @TypeGraphQL.Query(() => [ListItem], { nullable: false })
  async listItems(
    @TypeGraphQL.Ctx() _ctx: GqlContext,
    @TypeGraphQL.Info() _info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyListItemArgs
  ) {
    const filter = convertFilterForMongo(args.where);
    return await ListItemModel.find(filter ?? {});
  }

  @TypeGraphQL.Mutation(() => ListItem)
  async createListItem(
    @TypeGraphQL.Ctx() _ctx: GqlContext,
    @TypeGraphQL.Info() _info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: ListItemCreationArgs
  ) {
    const listItem = await _createListItem(args);
    if (listItem) {
      // NOTE: This update fails if it's not awaited.
      await UserModel.findOneAndUpdate(
        { _id: listItem.userId },
        { $push: { listItems: { ...listItem } } }
      );
    }
    return listItem;
  }

  /*
  @TypeGraphQL.Mutation(() => [ListItem], { nullable: false })
  async createManyListItem(
    @TypeGraphQL.Ctx() _ctx: GqlContext,
    @TypeGraphQL.Info() _info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: ListItemsCreationArgs
  ): Promise<ListItem[]> {
    throw new Error("Not implemented");
  }
  */

  @TypeGraphQL.Mutation(() => ListItem)
  async updateListItem(
    @TypeGraphQL.Ctx() _ctx: GqlContext,
    @TypeGraphQL.Info() _info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: ListItemUpdateArgs
  ) {
    return await _updateListItem(args);
  }

  @TypeGraphQL.Mutation(() => ListItem)
  async upsertListItem(
    @TypeGraphQL.Ctx() _ctx: GqlContext,
    @TypeGraphQL.Info() _info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: ListItemUpsertionArgs
  ) {
    return await _upsertListItem(args);
  }

  /*
  @TypeGraphQL.Mutation(() => [ListItem], { nullable: false })
  async updateListItems(
    @TypeGraphQL.Ctx() _ctx: GqlContext,
    @TypeGraphQL.Info() _info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: ArgsForUpdatingManyListItems
  ) {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation(() => [ListItem], { nullable: false })
  async updateListItemsDistinctly(
    @TypeGraphQL.Ctx() _ctx: GqlContext,
    @TypeGraphQL.Info() _info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: ArgsForUpdatingManyListItems
  ) {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation(() => ListItem, { nullable: true })
  async deleteListItem(
    @TypeGraphQL.Ctx() _ctx: GqlContext,
    @TypeGraphQL.Info() _info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteListItemArgs
  ) {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation(() => [ListItem], { nullable: false })
  async deleteManyListItem(
    @TypeGraphQL.Ctx() _ctx: GqlContext,
    @TypeGraphQL.Info() _info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyListItemArgs
  ) {
    throw new Error("Not implemented");
  }
  */
}
