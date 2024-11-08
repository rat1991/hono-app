import Factories from '@/api'
import prisma from '@/common/ORM'

Factories.createController('api::user', {
    async create(ctx) {
        const res = await prisma.user.create({
            data: {
                name: 'John Doe',
                email: 'john.doe@example.com',
                password: '123456'
            }
        })
        console.log(res);
        return ctx.text('Creating user')
    },
    async find(ctx) {
        const res = await prisma.user.findMany()
        console.log('Finding user', res);
        return ctx.json(res)
    }
})