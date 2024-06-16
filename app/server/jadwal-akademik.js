import { prisma } from "./db.server";

export async function addJadwalAkademik(jadwal_akademik) {
    try {
        const jadwalAkademikExist = await prisma.Jadwal_Akademik.findFirst({
            where: {
                judul: jadwal_akademik.judul
            }
        })
        if (jadwalAkademikExist) {
            const error = new Error(
                'Jadwal tersebut sudah diumumkan'
            )
            error.status = 422;
            throw error
        }
        await prisma.Jadwal_Akademik.create({
            data: {
                judul: jadwal_akademik.judul,
                tanggal: jadwal_akademik.tanggal,
                deskripsi: jadwal_akademik.deskripsi
            }
        })
    } catch (e) {
        console.log(e)
        throw e
    }
}

export async function getJadwalAkademik() {
    try {
        const jadwal_akademik = await prisma.Jadwal_Akademik.findMany({
            orderBy: {
                id: 'desc'
            }
        })
        return jadwal_akademik
    } catch (e) {
        console.log(e)
        throw e
    }
}
