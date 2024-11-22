import fse from 'fs-extra'
import path from "node:path"
import { Hono } from "hono"
import type { AppHono, HonoEnv } from '@/main'
import { importModule } from '@/utils/helpers'
import { errorHandler } from '@/common/errorHandler'
import { createMiddleware } from 'hono/factory'
import qs from 'qs'

export interface ApiEnv extends HonoEnv {
    Variables: HonoEnv['Variables'] & {
        defaultConfig: Pick<Pagination, 'pageSize' | 'page'>
    }
}

export interface Pagination {
    pageSize: number,
    page: number
    total: number
}

const defaultPaginationMiddleware = createMiddleware<ApiEnv>(async (c, next) => {
    c.set('defaultConfig', {
        pageSize: 10,
        page: 1
    })
    await next()
})

export default async function(app:AppHono) {
    const apiModule = new Hono<HonoEnv>().basePath("/api")
    apiModule.use(defaultPaginationMiddleware)
    // 错误处理
    apiModule.onError(errorHandler)

    // 自动导入子模块
    const apiModules = import.meta.glob<{ default: Hono }>('/src/api/**/index.ts', { eager: false });
    for (const [key, value] of Object.entries(apiModules)) {
        const module = await value()
        apiModule.route('/', module.default)
    }
    app.route('/', apiModule)
};