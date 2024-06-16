import { prisma } from "./db.server";
import bcryptjs from 'bcryptjs'
import createUserSession from "./session.server";
// import crypto from 'crypto'
// dosen       Dosen?   @relation("qwew", fields: [idDosen], references: [id])
// idDosen     String  @db.ObjectId

export async function addMahasiswa(mahasiswa) {
    try { 
        const mhsExist = await prisma.Mahasiswa.findFirst({
            where: {
                nim: mahasiswa.nim
            }
        })       
        if (mhsExist) {
            const error = new Error(
                'Mahasiswa dengan NIM tersebut sudah terdaftar'
            )
            error.status = 422;
            throw error
        }
        // const salt = crypto.randomBytes(16).toString('hex')
        // const passwordHash = crypto.pbkdf2Sync(mahasiswa.password, salt, 1000, 64, `sha512`).toString(`hex`)
        const passwordHash = await bcryptjs.hash(mahasiswa.password, 12)
        // const alamatHash = await bcryptjs.hash(mahasiswa.alamat, 12)
        await prisma.Mahasiswa.create({
            data: {
                nim: mahasiswa.nim,
                nama: mahasiswa.nama,
                alamat: mahasiswa.alamat,
                email: mahasiswa.email,
                jurusan: mahasiswa.jurusan,
                // prodi: mahasiswa.prodi,
                kurikulum: mahasiswa.kurikulum,
                sistem_kuliah: mahasiswa.sistem_kuliah,
                status_pendaftaran: mahasiswa.status_pendaftaran,
                tgl_msk: mahasiswa.tgl_msk,
                angkatan: mahasiswa.angkatan,
                kelas: mahasiswa.kelas,
                semester: mahasiswa.semester,
                kelas: mahasiswa.kelas,
                semester: mahasiswa.semester,
                // role: mahasiswa.role,
                username: mahasiswa.username,
                password: passwordHash
                // createdAt: new Date(mahasiswa.createdAt)
                // amount: +note.amount,
                // date: new Date(note.date),
            }
        })
        // return mahasiswa
        // await createUserSession(mhsExist.id)
    } catch (e) {
        console.log(e)
        throw e
    }
}

export async function getMahasiswa() {
    try {
        const mahasiswa = await prisma.Mahasiswa.findMany({
            orderBy: {
                id: 'desc'
            }
        })
        return mahasiswa
    } catch (e) {
        console.log(e)
        throw e
    }
}

export async function getMahasiswaId(id) {
    try {
        const mahasiswa = prisma.Mahasiswa.findFirst({
            where: {id}
        })
        return mahasiswa
    } catch (e) {
        console.log(e)
        throw e
    }
}

export async function updateMahasiswa(id, mahasiswa) {
    // const salt = crypto.randomBytes(16).toString('hex')
    // const passwordHash = crypto.pbkdf2Sync(mahasiswa.password, salt, 1000, 64, `sha512`).toString(`hex`)
    // const passwordHash = await bcryptjs.hash(mahasiswa.password, 12)
    try {
        await prisma.Mahasiswa.update({
            where: {id},
            data: {


                nim: mahasiswa.nim,
                nama: mahasiswa.nama,
                alamat: mahasiswa.alamat,
                email: mahasiswa.email,
                jurusan: mahasiswa.jurusan,
                kurikulum: mahasiswa.kurikulum,
                sistem_kuliah: mahasiswa.sistem_kuliah,
                status_pendaftaran: mahasiswa.status_pendaftaran,
                tgl_msk: mahasiswa.tgl_msk,
                angkatan: mahasiswa.angkatan,
                kelas: mahasiswa.kelas,
                semester: mahasiswa.semester,
                kelas: mahasiswa.kelas,
                semester: mahasiswa.semester,
                username: mahasiswa.username,
                // password: passwordHash






                // nim: mahasiswa.nim,
                // nama: mahasiswa.nama,
                // alamat: mahasiswa.alamat,
                // email: mahasiswa.email,
                // jurusan: mahasiswa.jurusan,
                // // prodi: mahasiswa.prodi,
                // kurikulum: mahasiswa.kurikulum,
                // tgl_msk: mahasiswa.tgl_msk,
                // angkatan: mahasiswa.angkatan,
                // sistem_kuliah: mahasiswa.sistem_kuliah,
                // status_pendaftaran: mahasiswa.status_pendaftaran,
                // kelas: mahasiswa.kelas,
                // semester: mahasiswa.semester,
                // // kelas: mahasiswa.kelas,
                // // semester: mahasiswa.semester,
                // // role: mahasiswa.role,
                // username: mahasiswa.username,
                // // password: passwordHash
            }
        })
    } catch (e) {
        console.log(e)
        throw e
    }
}

export async function deleteMahasiswa(id) {
    try {
        await prisma.Mahasiswa.delete({
            where: {
                id
            }
        })
    } catch (e) {
        console.log(e)
        throw e
    }
}

export async function getTotalMhs() {
    try {
        const mhs = await prisma.Mahasiswa.count()
        return mhs
    } catch (e) {
        console.log(e)
        throw e
    }
}

export async function filterMhs() {
    try {
        const mhs = await prisma.Mahasiswa.groupBy({
            
        })
    } catch (e) {
        
    }
}