import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async()=>{
    const allusers = await prisma.user.findMany({
        include : {
            posts :true,
            profile : true
        }
    });
    console.log(allusers);

}

const create =async () =>{
    await prisma.user.create({
        data:{
            name : 'Divyesh Nag',
            email : 'divyeshnag@gmail.com',
            profile : {
                create:{bio:'I like turtles'}
            },
            posts : {
                create : {title : "Hello World"}
            }
        }
        
    })
    main()
}

main().then(async()=>{
    await prisma.$disconnect()
}).catch(async (e)=>{
    console.error(e);
    await prisma.$disconnect();
})