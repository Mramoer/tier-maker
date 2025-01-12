import { ObjectId } from "mongodb";

export default class Tier {
    constructor(
        public name: string,
        public description: string,
        public _id?: ObjectId | string,
    ) 
    {}
}