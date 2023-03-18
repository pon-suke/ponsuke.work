const path = require('path');

module.exports = {
    async redirects() {
        return [
            {
                source: "/p",
                destination: "/p/1",
                permanent: true,
            },
            {
                source: "/",
                destination: "/p/1",
                permanent: true,
            },
            {
                source: "/old",
                destination: "/old/p/1",
                permanent: true,
            },
            {
                source: "/old/p",
                destination: "/old/p/1",
                permanent: true,
            }
        ]
    }
}
