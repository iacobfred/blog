/* Do not edit this file. It was generated programmatically. */

import mongoose from "mongoose";

// https://mongoosejs.com/docs/typescript.html

export interface ListItem {
  _id: mongoose.Types.ObjectId;
  userId: mongoose.Types.ObjectId;
  listId: mongoose.Types.ObjectId;
  data: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  archivedAt?: Date | null;
}

export default ListItem;
