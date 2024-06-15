import { fetchCollection } from "../mongodb/mongoClient.js";

const ACTIVE_WORKOUT_COLLECTION_NAME = "Active Workouts";

const createPass = async (activePASS, newpass) => {
  const collection = await fetchCollection(ACTIVE_WORKOUT_COLLECTION_NAME);
  const result = await collection.updateOne(
    {
      _id: activePASS,
    },
    {
      $push: { pass: newpass },
    },
    {
      upsert: true,
    }
  );
  return newpass;
};

export default {
  createPass,
};
