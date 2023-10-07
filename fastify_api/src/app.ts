import fastify from "fastify";
import userRoutes from "./modules/user/user.route";
const server = fastify();

const serverOptions = {
    host: '0.0.0.0', // Use '0.0.0.0' to listen on all available network interfaces.
    port: 3000,
  };

server.get("/healthcheck",()=>{
    return {status : "OK"};
})

const main = async()=>{
    server.register(userRoutes, {prefix:'/api/users'})
    try{
        
        // userRoutes(server);
        await server.listen(serverOptions);
        console.log(`server started on port ${serverOptions.port}`);
    }catch(e){
        console.log(e)
    }
}

main()