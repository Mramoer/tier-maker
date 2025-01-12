import express from "express";
import { connectToDB } from "./src/database/services/database.service";
import { tierRouter } from "./src/database/routes/tier.router";
import {userRouter} from './src/database/routes/user.router'
import cookieParser from 'cookie-parser'

import cors from 'cors';

// Разрешить запросы от конкретного источника (http://localhost:5173)


const app = express();
const PORT = 3000

app.use(cookieParser())
app.use(cors({origin: "http://localhost:5173", credentials: true}));

connectToDB()

    .then(() => {
        app.use("/", userRouter);
        app.use("/content", tierRouter);

        app.listen(PORT, () => {
            console.log(`Server started at http://localhost:${PORT}`);
        });
    })
    .catch((error: Error) => {
        console.error("Database connection failed", error);
        process.exit();
    });