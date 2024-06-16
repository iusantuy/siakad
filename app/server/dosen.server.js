import { prisma } from "./db.server";
import bcryptjs from 'bcryptjs'
// dosen       Dosen?   @relation("qwew", fields: [idDosen], references: [id])
// idDosen     String  @db.ObjectId

export async function addDosen(dosen) {
    try {        
        const dosenExist = await prisma.Dosen.findFirst({
            where: {
                kode: dosen.kode
            }
        })       
        if (dosenExist) {
            const error = new Error(
                'Dosen dengan kode tersebut sudah terdaftar'
            )
            error.status = 422;
            throw error
        }
        // const salt = crypto.randomBytes(16).toString('hex')
        // const passwordHash = crypto.pbkdf2Sync(mahasiswa.password, salt, 1000, 64, `sha512`).toString(`hex`)
        const passwordHash = await bcryptjs.hash(dosen.password, 12)
        await prisma.Dosen.create({
            data: {
                kode: dosen.kode,
                nama: dosen.nama,
                email: dosen.email,
                pendidikan: dosen.pendidikan,
                username: dosen.username,
                password: passwordHash
                // mata_kuliah: dosen.mata_kuliah
                // kelas: dosen.kelas,
                // semester: dosen.semester,
                // createdAt: new Date(mahasiswa.createdAt)
                // amount: +note.amount,
                // date: new Date(note.date),
            }
        })
    } catch (e) {
        console.log(e)
        throw e
    }
}

export async function getDosen() {
    try {
        const dosen = await prisma.Dosen.findMany({
            orderBy: {
                id: 'desc'
            }
        })
        return dosen
    } catch (e) {
        console.log(e)
        throw e
    }
}

export async function getDosenId(id) {
    try {
        const dosen = prisma.Dosen.findFirst({
            where: {id}
        })
        return dosen
    } catch (e) {
        console.log(e)
        throw e
    }
}

export async function updateDosen(id, dosen) {
    try {
        await prisma.Dosen.update({
            where: {id},
            data: {
                nama: dosen.nama,
                nim: dosen.nim,
                kelas: dosen.kelas,
                semester: +dosen.semester
            }
        })
    } catch (e) {
        console.log(e)
        throw e
    }
}

export async function deleteDosen(id) {
    try {
        await prisma.Dosen.delete({
            where: {
                id
            }
        })
    } catch (e) {
        console.log(e)
        throw e
    }
}

export async function totalDosen() {
    try {
        await prisma.Dosen.count()
    } catch (e) {
        console.log(e)
        throw e
    }
}