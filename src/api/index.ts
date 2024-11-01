import type { Context, Handler, MiddlewareHandler } from 'hono'
import { Hono } from 'hono'
import { csrf } from 'hono/csrf';
import { createFactory, Factory } from 'hono/factory'
import fse from 'fs-extra'
import path from 'path';


interface AppControllers {
    [key: string]: Controller
}
interface Controller {
    (ctx:Context): any
}
enum UID_SYMBOL {
    api = 'api::',
    admin = 'admin::',
    'content-api' = 'api::',
}
type RouterType = 'admin' | 'content-api';
interface Router {
    type?: RouterType
    prefix?: string
    routes: Route[]
}
interface Route {
    method: 'GET'|'POST'|'PUT'|'DELETE'|'PATCH'|'OPTIONS'
    path: string
    handler?: Handler | string
    middlewares?: MiddlewareHandler[]
}
interface HonoApi extends Hono {
    app: Hono
}


async function importApiModule() {
    const modulesLoading:Promise<any>[] = [];
    const folderPath = path.resolve(process.cwd(), 'src', 'api')
    const modulesPath = (await fse.readdir(folderPath, { withFileTypes: true })).reduce<string[]>((res, f) => {
        f.isDirectory() && res.push(f.name)
        return res
    }, [])
    modulesPath.forEach(m => {
        modulesLoading.push(
            import('file://' + path.resolve(folderPath, m, 'controller.ts')),
            import('file://' + path.resolve(folderPath, m, 'routes.ts'))
        )
    })
    await Promise.all(modulesLoading)
}
interface FactoriesOptions {
    bootstrap?(app:Factories['app']): void
}
class Factories {
    factory: Factory
    api:HonoApi|null = null
    static appControllers:AppControllers = {}
    static appRouters: Router[] = []
    constructor(private readonly app:Hono,private readonly options:FactoriesOptions={}) {
        this.factory = createFactory()
    }
    async createApi(prefix:string='/api') {
        const { factory, app, options } = this
        this.api = Object.assign(app.basePath(prefix), { app })
        this.api.use(csrf())
        await importApiModule()
        Factories.appRouters.forEach(({ routes }) => {
            const apiRouter = new Hono()
            routes.forEach(route => {
                const method = route.method.toLowerCase() as ('get'|'post'|'put'|'delete'|'patch'|'options')
                const handler = factory.createHandlers(route.handler as Handler)
                const middlewares = route.middlewares ?? []
                apiRouter[method](route.path, ...middlewares, ...handler)
            })
            this.api?.route('/', apiRouter)
        })
        options.bootstrap && options.bootstrap(app)
        return this.api
    }
    static createController(uid:string, controllers:Record<string, Controller>) {
         for (const [name, controller] of Object.entries(controllers)) {
             this.appControllers[uid + '.' + name] = controller
         }
    }
    static createRouter(uid:string, router:Router) {
        router.type = router.type ?? 'content-api'
        const symbol = UID_SYMBOL[router.type]
        const id = uid.replace(symbol, '')
        router.prefix = router.prefix ?? `/${id}`
        router.routes.forEach(route => {
            switch (typeof route.handler) {
                case 'string':
                    route.handler = this.appControllers[`${symbol}${route.handler}`]
            }
            if (!route.handler) {
                throw new Error(`Handler not found for route ${route.path} in ${uid} controller`)
            }
            console.log(router);
            this.appRouters.push(router)
        })

    }
}

export default Factories