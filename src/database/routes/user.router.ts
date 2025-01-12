import * as dotenv from 'dotenv'
import {body} from 'express-validator';
import express, { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import User from '../models/userSchema';
import { collections } from '../services/database.service';

dotenv.config();
export const userRouter = express.Router();
userRouter.use(express.json());

const hashPassword = async (password: string) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt)
    return hashedPassword
}

userRouter.post('/registration', 
    body('email').notEmpty().isEmail(), 
    body('password').notEmpty().isStrongPassword() , async (req, res) => {
    try {
        const userData: User = req.body;
        const existingEmail = await collections.users?.findOne({email: userData.email})
    if (existingEmail) {
        res.status(301);
        throw new Error('email already exists')
    }
    
    userData.password = await hashPassword(userData.password);
    await collections.users?.insertOne({...userData});
    res.status(201).send('<p>registred successfully</p>')
    } catch (error) {
        console.log(error)
    }
    
})

userRouter.post('/auth', async (req, res) => {
    const {email, password, id}: User = req.body;
    const user = await collections.users?.findOne({email});
    console.log(user)
    if (!user) {
        res.status(401).json({name:'such email does not exist'})   
    }
    else {
        const isPassword = await bcrypt.compare(password, user.password)
        if (user.email == email && isPassword) {
            const token = jwt.sign({email: email, id}, process.env.SECRET_KEY!, {expiresIn: "24h", algorithm: "HS256"});
            res.status(200)
            .setHeader("Set-Cookie",`authToken=${token}; Path=/; Max-Age=86400`)
            .send(token)
        } 
        else {
            res.status(401).json({name:'invalid credentials'})
        }
    }
})

userRouter.get('/content', (req, res) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) {
        res.status(401).send('No token provided');
    }
    else {
        try {
            jwt.verify(token, process.env.SECRET_KEY!)
            res.redirect('/content')
        } catch (error) {
            res.status(401).send('invalid or expired token')
        }
    }
})

userRouter.post('/logout', (req: Request, res: Response) => {
    try {
        if (req.cookies.authToken) {
            res.clearCookie('authToken');
            res.status(201).send('logout successfully')
        }
        res.status(400).send('cannot delete provided cookie');
    } catch (error) {
        console.error(error)
        res.status(500).send('server-side issue occured')
    }
})                  

