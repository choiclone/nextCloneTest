import mysql2 from 'mysql2';
import mysql from 'mysql';
import type { NextApiRequest, NextApiResponse } from 'next'
import client from "../../libs/client";

export default async function handler(
    req: NextApiRequest, 
    res: NextApiResponse
) {
    await client.users.create({
        data: {
            id: "s207040@gmail.com",
            password: "123412341234"
        }
    });

    res.status(200).json({name: "test"});
}