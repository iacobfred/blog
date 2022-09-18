import { User } from "@web/generated/interfaces/User";
import UserModel from "@web/generated/models/User";
import {
  FindUniqueUserArgs,
  UserCreationArgs,
  UserUpdateArgs,
  UserUpsertionArgs,
} from "@web/graphql/generated/args/user.args";
import { convertFilterForMongo } from "@web/graphql/schema/helpers";
import { ModifyResult } from "mongoose";

export const findUser = async ({ where }: FindUniqueUserArgs) => {
  const filter = convertFilterForMongo(where);
  return UserModel.findOne(filter).lean({ virtuals: true });
};

export const createUser = async ({ data }: UserCreationArgs) => {
  return UserModel.create([data]).then((results) => results[0]);
};

export const updateUser = async ({ where, data }: UserUpdateArgs) => {
  const filter = convertFilterForMongo(where);
  return await UserModel.findOneAndUpdate(filter, data, { returnDocument: "after" }).lean({
    virtuals: true,
  });
};

export const upsertUser = async ({ where, data }: UserUpsertionArgs) => {
  const result: ModifyResult<User> = await UserModel.findOneAndUpdate(
    convertFilterForMongo(where),
    data,
    {
      upsert: true,
      new: true,
      returnDocument: "after",
      runValidators: true,
      setDefaultsOnInsert: true,
      rawResult: true,
    }
  ).lean({ virtuals: true });
  return result.value;
};
