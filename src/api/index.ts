import type { Context } from 'hono'

interface Controller {
    (ctx:Context): any
}

class Factories {
    static createController(controllers:Record<string, Controller>) {
        
    }
}