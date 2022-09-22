import {
  FindUniqueValueArgs,
  ValueCreationArgs,
  ValueUpdateArgs,
  ValueUpsertionArgs,
} from "@web/generated/graphql/args/value.args";
import ValueModel from "@web/generated/models/Value";
import { convertFilterForMongo } from "@web/graphql/schema/helpers";

export const findValue = async ({ where }: FindUniqueValueArgs) => {
  const filter = convertFilterForMongo(where);
  return ValueModel.findOne(filter).lean({ virtuals: true });
};

export const createValue = async ({ data }: ValueCreationArgs) => {
  return ValueModel.create([data]).then((results) => results[0]);
};

export const updateValue = async ({ where, data }: ValueUpdateArgs) => {
  const filter = convertFilterForMongo(where);
  return await ValueModel.findOneAndUpdate(filter, data, { returnDocument: "after" }).lean({
    virtuals: true,
  });
};

export const upsertValue = async ({ where, data }: ValueUpsertionArgs) => {
  const exists = await ValueModel.exists(where);
  return exists ? updateValue({ where, data }) : createValue({ data });
  /*
  const result: ModifyResult<Value> = await ValueModel.findOneAndUpdate(
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
  */
};
