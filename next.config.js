const path = require('path');

module.exports = {
    env: {
        // Reference a variable that was defined in the .env file and make it available at Build Time
        X_API_KEY: "9b30e206-4b28-4453-91f5-5d39d40d15a3",
        SS_URL: "https://script.google.com/macros/s/AKfycbzYqH8x3wJ0wkPGU8cHZ_JPKjJVCJpuE3nGV3PLkHbfXkUuuCq8JtswMNkuhWAFUTRy/exec",
        SS_POST_URL: "https://script.google.com/macros/s/AKfycbwa4kwbrmRLGJ1pZL-gUv1WMhjadTOnhrx_tUhKE3HOC6QYAPIVqQRPDM-izH0KDe9W/exec",
        ALGOLIA_APP_ID: "ROPPC1381S",
        ALGOLIA_API_KEY: "2e62d73ae87dfa349d7da9dbebdefcec",
        ALGOLIA_ADMIN_KEY: "c6dbe6d9e13350da21b311a7e60ae289",
    },
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
