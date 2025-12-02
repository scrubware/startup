import { ObjectId } from "mongodb";
import { Profile } from "../shared/contentModels";

export type WithId<T, TId = ObjectId> = T & { _id: TId };
export type WithoutId<T> = Omit<T, "_id">;

export const asProfileWithId = (x: any): WithId<Profile> => ({ ...x });