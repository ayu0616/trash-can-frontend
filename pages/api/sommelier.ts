// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { BACKEND_URL } from "@/util/constVars";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse<string[]>) {
    if (!req.url) {
        res.status(404).json([]);
        return;
    }
    const url = req.url.replace("/api", BACKEND_URL);
    const r = await fetch(url).then((res) => res.json());
    res.status(200).json(r);
}
