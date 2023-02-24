// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    name: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const r = await fetch("python-app://0.0.0.0:3001").then((res) => res.text());
    res.status(200).json({ name: r });
}
