/* Do not edit this file. It was generated programmatically. */

import mongoose from "mongoose";

// https://mongoosejs.com/docs/typescript.html

export interface Goal {
  _id: mongoose.Types.ObjectId;
  userId: mongoose.Types.ObjectId;
  habitId?: mongoose.Types.ObjectId | null;
  parentId?: mongoose.Types.ObjectId | null;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  archivedAt?: Date | null;
}

export default Goal;
