import { NextApiRequest, NextApiResponse } from "next";
import withHandler from "./withHandler";
import client from "../../../libs/client/client";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.body);
  return res.status(200).end();
}

export default withHandler("POST", handler);
