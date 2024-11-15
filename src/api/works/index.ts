import type { HonoEnv } from "@/main";
import { parseQuery } from "@/utils/helpers";
import { Hono } from "hono";


const worksController = new Hono<HonoEnv>().basePath('/works');

worksController.post('/', async(ctx) => {
    const body = await ctx.req.parseBody()
    const aa = parseQuery(ctx)
    console.log('aa', aa);
    return ctx.json({ message: 'works created' })
})

export default worksController;