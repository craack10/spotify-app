import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()
async function main() {
    const user = await prisma.user.create({
        data:{
            id: 6565465464,
            name:'adam',
            email:'adam@prisma.io'
        },
    })
    console.log(user)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })