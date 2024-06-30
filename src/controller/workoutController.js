import workoutService from "../service/workoutService.js";
import { ObjectId } from "mongodb";
import uniqid from "uniqid";
import { getDateTimeStrings } from "../utils/dateTime.js";

const createNewPass = async (req, res) => {
  const id = uniqid();
  const activePASS = "activepass";
  const { name, description } = req.body;
  const { time, date } = getDateTimeStrings();

  if (name === undefined && description === undefined) {
    return res.status(400).send({
      err: "missing parameters name or description",
    });
  }

  try {
    const newPass = { id, name, description, time, date };
    return res
      .status(200)
      .send(await workoutService.createPass(activePASS, newPass));
  } catch (e) {
    res.send(404).send({ err: "pass was not added" });
  }
};

export default {
  createNewPass,
};

// hej på er :D
// tjabba
