import type { NextApiRequest, NextApiResponse } from "next";
import connectMongo from "../../../db/conn";
import {
  deleteUser,
  getUser, 
  putUser,
} from "@/db/controller";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  connectMongo().catch(() =>
    res.status(405).json({
      error: "Error in the Connection",
    })
  );
  //type of request
  const { method } = req;

  switch (method) {
    case "GET":
      getUser(req, res);
      break;

    case "PUT":
      putUser(req, res);
      break;

    case "DELETE":
      deleteUser(req, res);
      break;

    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowd`);
      break;
  }
}
