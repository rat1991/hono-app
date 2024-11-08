import Factories from "../index.js";

Factories.createRouter('api::user', {
    routes: [
        {
            method: 'GET',
            path: '/user',
            handler: 'user.find'
        },
        {
            method: 'POST',
            path: '/user',
            handler: 'user.create'
        }
    ]
})