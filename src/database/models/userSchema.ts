import { ObjectId } from "mongodb";

export default class User {
    email: string;
    password: string;
    name?: string;
    token?: string;
    id?: ObjectId;
    constructor(
        email: string,
        password: string,
        name?: string,
        token?: string,
        id?: ObjectId
    ) 
    {
        this.email = email;
        this.password = password;
        this.name = name;
        this.token = token;
        this.id = id;
    }
}