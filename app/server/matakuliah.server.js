import { prisma } from "./db.server";

export async function addMK(mk) {
    try {
        const mkExist = await prisma.Mata_Kuliah.findFirst({
            where: {
                kode: mk.kode
            }
        })
        if (mkExist) {
            const error = new Error(
                'Mata Kuliah sudah terdaftar'
            )
            error.status = 422;
            throw error
        }
        await prisma.Mata_Kuliah.create({
            data: {
                kode: mk.kode,
                nama: mk.nama
            }
        })
    } catch (e) {
        throw e
    }
}

export async function getMK() {
    try {
        // let PER_PAGE = 7
        const matakuliah = await prisma.Mata_Kuliah.findMany({
            orderBy: {
                id: 'desc'
            },
            // take: PER_PAGE,
            // skip: 5
        })
        return matakuliah
    } catch (e) {
        throw e
    }
}

// export async function getMK() {
//     // const url = new URL(request.url)
//     // const query = url.searchParams
//     // const currentPage = Math.max(Number(query.get('page') || 1), 1)
//     try {
//         let PER_PAGE = 7
//         const matakuliah = await prisma.Mata_Kuliah.findMany({
//             take: PER_PAGE,
//             skip: 5
//         })
//         return matakuliah
//     } catch (e) {
//         throw e
//     }
// }

export async function getMKId(id) {
    try {
        const matakuliah = prisma.Mata_Kuliah.findFirst({
            where: {id}
        })
        return matakuliah
    } catch (e) {
        throw e
    }
}

export async function getTotalMK() {
    // const url = new URL(request.url)
    // const query = url.searchParams
    // const currentPage = Math.max(Number(query.get('page') || 1), 1)
    try {
        // let PER_PAGE = 5
        const matakuliah = await prisma.Mata_Kuliah.count()
        return matakuliah
    } catch (e) {
        throw e
    }
}

export async function deleteMK(id) {
    try {
        await prisma.Mata_Kuliah.delete({
            where: {
                id
            }
        })
    } catch (e) {
        console.log(e)
        throw e
    }
}