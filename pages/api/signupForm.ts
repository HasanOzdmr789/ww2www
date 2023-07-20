import type { NextApiRequest, NextApiResponse } from "next";

import clientPromise from "../../database/conn";

import { createHash } from "crypto";

type ResponseData = {
  data: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const client = await clientPromise;
  const db = client.db("GhostPay");
  const collect = await db.collection("Clients");

  const body = req.body;

  if (
    !body.name ||
    !body.mail ||
    !body.password
  ) {
    return res.status(400).json({ data: "Some Data is Missing" });
  }

  const salt = "GhostPay13!";
  const passhash = createHash("sha256")
    .update(body.password)
    .update(createHash("sha256").update(salt, "utf8").digest("hex"))
    .digest("hex");
  body.password = passhash;

  const post = collect.insertOne(body);
  res.status(200).json({
    data: `${body.name} ${body.surname} ${body.mail} ${body.metamaskid}`,
  });
}
