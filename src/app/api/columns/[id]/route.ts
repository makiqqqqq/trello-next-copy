import {prisma} from "@/core/prisma";
import {NextResponse} from "next/server";
import {updateColumnDto} from "./dto";

interface ColumnRouteContext {
    params: {
        id: string
    }
}

export async function PUT(req: Request, {params}: ColumnRouteContext) {
    const {id} = params
    const bodyRaw = await req.json();
    const validateBody = updateColumnDto.safeParse(bodyRaw)
    const foundColumn = await prisma.columns.findUnique({
        where:{id}
    })

    if (!validateBody.success) {
        return NextResponse.json(validateBody.error.issues, {
            status: 400
        })
    }

    if(!foundColumn) {
        return NextResponse.json({
            code: 'not_found',
            message: 'Column not_found'
        })
    }

    const column = await prisma.columns.update({
        where: {
            id
        },
        data: validateBody.data
    })

    return NextResponse.json(column)

}

export async function DELETE(req: Request, {params}: ColumnRouteContext ){
    const {id} = params

    const foundColumn = await prisma.columns.findUnique({
        where:{id}
    })

    if(!foundColumn) {
        return NextResponse.json({
            code: 'not_found',
            message: 'Column not_found'
        })
    }

    await prisma.columns.delete({
        where:{id}
    })

    return NextResponse.json({}, {status: 200})
}