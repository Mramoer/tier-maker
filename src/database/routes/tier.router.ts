import express, {Response, Request} from 'express';
import { ObjectId } from 'mongodb';
import {collections} from '../services/database.service'
import Tier from '../models/tieritems';

export const tierRouter = express.Router();

tierRouter.use(express.json());

//GET

tierRouter.get("/todos", async (_req: Request, res: Response) => {
    try {
       const games = (await collections.tierlist?.find().toArray()) as unknown as Tier[];
        res.status(200).send(games);
    } catch (error: unknown) {
        res.status(500).send(error);
    }
});

tierRouter.get("/todos/:id", async (req: Request, res: Response) => {
    const id = req?.params?.id;

    try {
        const query = { _id: new ObjectId(id) };
        const tier = (await collections.tierlist?.findOne(query)) as unknown as Tier[];

        if (tier) {
            res.status(200).send(tier);
        }
    } catch (error) {
        res.status(404).send(`Unable to find matching document with id: ${req.params.id}`);
    }
});

//POST

tierRouter.post("/create", async (req: Request, res: Response) => {
    try {
        const newItem = req.body as unknown as Tier[];
        console.log(newItem)
        const result = await collections.tierlist?.insertOne(newItem);
        
        if (result) {
            res.status(201).send(`Successfully created a new tier item with id ${result.insertedId}`);
        } else {
            res.status(500).send("Failed to create a new tier item.");
        }
    } catch (error) {
        console.error(error);
        res.status(400).send((error as Error).message);
    }
});



