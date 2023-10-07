import { FastifyInstance } from "fastify";
import registerUserHandler from "./user.controller";

const userRoutes = async (server : FastifyInstance)=>{
    server.post("/",registerUserHandler);
    server.get("/getusers",getUsers);
}

export default userRoutes;