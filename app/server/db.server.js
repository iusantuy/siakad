import { PrismaClient } from '@prisma/client'

let prisma

if (process.env.NODE_ENV === 'production') {
    prisma = new PrismaClient()
    prisma.$connect()
} else {
    if (!global.__db) {
        global.__db = new PrismaClient()
        global.__db.$connect()
    }
    prisma = global.__db
}

export { prisma }

// DATABASE_URL="mongodb+srv://fha971128:zxYxNu3QJUb6p5Ze@siakad-stmik-dnbs.wxggzbh.mongodb.net/siakad?retryWrites=true&w=majority"