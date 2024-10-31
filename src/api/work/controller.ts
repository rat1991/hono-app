import Factories from '@/api'

Factories.createController('api::work', {
    async create(ctx) {
        console.log('create work')
        return ctx.text('hello hono!!!')
    }
})