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
  console.log("TRY CONNECT3");

  const client = await clientPromise;
  const db = client.db("GhostPay");
  const collect = await db.collection("Clients");

  // Get data submitted in request's body.
  const body = req.body;

  // Optional logging to see the responses
  // in the command line where next.js app is running.
  console.log("body: ", body);

  // Guard clause checks for first and last name,
  // and returns early if they are not found
  if (!body.mail || !body.password) {
    // Sends a HTTP bad request error code
    return res.status(400).json({ data: "Some Data is Missing" });
  }

  const salt = "GhostPay13!";
  const passhash = createHash("sha256")
    .update(body.password)
    .update(createHash("sha256").update(salt, "utf8").digest("hex"))
    .digest("hex");

  const customer = await collect.findOne({
    mail: body.mail,
  });

  if (!customer) {
    return res.status(400).json({ data: "Wrong Mail" });
  }
  if (customer.password == passhash) {
    res.status(200).json({ data: `Successful login, Following another page` });
  } else {
    return res.status(400).json({ data: "Wrong Password" });
  }
}
