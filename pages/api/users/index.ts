// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import connectMongo from "../../../db/conn";
import { deleteUser, getUsers, postUser, putUser } from "@/db/controller";

type Data = {
  name: string;
  error: string;
  method: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  connectMongo().catch(() =>
    res.status(405).json({
      error: "Error in the Connection",
      name: "",
      method: undefined,
    })
  );

  //type of request
  const { method } = req;

  switch (method) {
    case "GET":
      getUsers(req, res);
      break;

    case "POST":
      postUser(req, res);
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
