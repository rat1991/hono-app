import Factories from "../index.js";

Factories.createRouter('api::work', {
    routes: [
        {
            method: 'GET',
            path: '/work',
            handler: 'work.create'
        }
    ]
})