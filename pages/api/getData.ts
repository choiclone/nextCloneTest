import mysql from 'mysql2';
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest, 
    res: NextApiResponse
) 
{
    let dbconnection = await mysql.createConnection({
        host: process.env.DB_HOST,
        database: process.env.DB_DATABASE,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWD
    });

    try {
        const query = "select * from subwayline"
        const results = await dbconnection.execute(query);
        console.log(results)
    }catch (error) {
        res.status(500).json({err: "err"});    
    }

    res.status(200).json({name: "test"});
}