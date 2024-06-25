import express, { Router } from "express";
import serverless from "serverless-http";

export async function handler(event, context) {
    const api = express();
    const router = Router();

    router.get('/fulfilled', (req, res) => res.status(200).json({ "work": "Lets go"}));

    api.use('/api/', router);
  
    return serverless(api)(event, context);
  }
