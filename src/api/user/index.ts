import { Hono, type Context } from "hono";
import { zValidator } from '@hono/zod-validator'
import { UsersSchema, type Users } from '@/schema/prisma'
import type { ApiEnv, Pagination } from "@/api";
import { HTTPException } from 'hono/http-exception'
import { parseQuery } from "@/utils/helpers";

const userController = new Hono<ApiEnv>().basePath('/user');
const usersValidator = zValidator('json', UsersSchema, (result, ctx) => {
    if (!result.success) {
        const errMsg = result.error.errors.map((e: any) => `field:${e.path[0]} - ${e.message}`).join(', ')
        throw new HTTPException(400, { message: errMsg, cause: result.error.issues[0] })
    }
})
function standardRes<D=unknown, E extends Record<string, unknown> = any>(data:D, extra?:E) {
    const res = {
        code: 200,
        data,
        message: 'success'
    }
    extra && Object.assign(res, extra)
    return res
}

function paginationRes(data:unknown, { total=0, page=1, pageSize=10 }:Pagination) {
    return standardRes(data, {
        pagination: {
            total, page, pageSize
        }
    })
}
function parsePagination<C extends Context>(ctx:C) {
    const { defaultConfig } = ctx.var
    const pagination:Pick<Pagination, 'page' | 'pageSize'> = {
        page: defaultConfig.page,
        pageSize: defaultConfig.pageSize
    }
    for (const [key] of Object.entries(pagination)) {
        const value = ctx.req.query(`pagination[${key}]`)
        value && (pagination[key as keyof typeof pagination] = parseInt(value))
    }
    return pagination
}

userController
.get('/', async (ctx) => {
    const { prisma } = ctx.var
    const { pagination } = parseQuery(ctx)
    const total = await prisma.users.count()
    const entities = await prisma.users.findMany({
        skip: (pagination.page - 1) * pagination.pageSize,
        take: pagination.pageSize,
        where: {
            name: {
                equals: 'i-su'
            }
        }
    })
    return ctx.json(paginationRes(entities, {
        total, page:pagination.page, pageSize:pagination.pageSize
    }));
})
.get('/:id{[0-9]+}', async (ctx) => {
    const id = parseInt(ctx.req.param('id'))
    const { prisma } = ctx.var
    const entity = await prisma.users.findUnique({
        where: { id }
    })
    return ctx.json(standardRes(entity));
})
.post('/', usersValidator, async (ctx) => {
    const data = await ctx.req.json()
    const { prisma } = ctx.var
    const isExist = await prisma.users.findUnique({
        where: {
            email: data.email
        }
    })
    if (isExist) {
        throw new HTTPException(409, {
            message: 'User already exists'
        })
    }
    const entity = await prisma.users.create({
        data
    })
    return ctx.json(standardRes(entity));
})
.put('/:id{[0-9]+}', usersValidator, async (ctx) => {
    const id = parseInt(ctx.req.param('id'))
    const data = await ctx.req.json()
    const { prisma } = ctx.var
    const entity = await prisma.users.update({
        where: { id },
        data
    })
    return ctx.json(standardRes(entity));
})

export default userController;