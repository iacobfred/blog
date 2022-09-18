/* Do not edit this file. It was generated programmatically. */

import { Account } from "@web/generated/interfaces/Account";
import { AccountDocument } from "@web/generated/models/Account/document";
import { postCreate, postUpdate, preSave } from "@web/generated/models/Account/hooks";
import { DEFAULT_SCHEMA_OPTIONS } from "@web/graphql/schema/types";
import mongoose, { ModifyResult, UpdateQuery } from "mongoose";
import mongooseLeanVirtuals from "mongoose-lean-virtuals";

const accountSchema = new mongoose.Schema<Account>(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    provider: { type: String, required: true },
    remoteId: { type: String, required: true, unique: true },
    scopes: { type: [String], required: true },
    accessToken: { type: String, required: false, default: null },
    refreshToken: { type: String, required: false, default: null },
    accessTokenExpiry: { type: Date, required: false, default: null },
    syncToken: { type: String, required: false, default: null },
    archivedAt: { type: Date, required: false, default: null },
  },
  DEFAULT_SCHEMA_OPTIONS
);

accountSchema.plugin(mongooseLeanVirtuals);

accountSchema.pre<AccountDocument>("save", async function () {
  console.log("Saving Account", this);
  await preSave(this);
});

accountSchema.post<AccountDocument>("save", async function (document) {
  console.log("Saved Account", document);
  await postCreate(document);
});

accountSchema.post<AccountDocument>(
  "findOneAndUpdate",
  async function (_result: AccountDocument | ModifyResult<AccountDocument>) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const query = this as unknown as UpdateQuery<AccountDocument>;
    const updatedFields = query.getUpdate().$set;
    if ((_result as ModifyResult<AccountDocument>).value) {
      const result = _result as ModifyResult<AccountDocument>;
      const account = result.value;
      if (account) {
        if (!result.lastErrorObject?.updatedExisting) {
          await postCreate(account);
        } else {
          await postUpdate(account, updatedFields);
        }
      }
    } else {
      const result = _result as AccountDocument;
      await postUpdate(result, updatedFields);
    }
  }
);

export { accountSchema };

// https://stackoverflow.com/questions/19051041/cannot-overwrite-model-once-compiled-mongoose
export const AccountModel =
  mongoose.models.Account || mongoose.model<Account>("Account", accountSchema);

export default AccountModel;
