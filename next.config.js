const { redirect } = require("next/dist/next-server/server/api-utils");

module.exports = {
    env: {
        // Reference a variable that was defined in the .env file and make it available at Build Time
        X_API_KEY: "9b30e206-4b28-4453-91f5-5d39d40d15a3",
        SS_URL: "https://script.google.com/macros/s/AKfycbzAvyLZq8zl9ZOq_AkTyI7oY5AoLdXESHBegfYdUG9XSe7iEMEKU3WpwVbPPDbqXG7A/exec",
        SS_POST_URL: "https://script.google.com/macros/s/AKfycbwa4kwbrmRLGJ1pZL-gUv1WMhjadTOnhrx_tUhKE3HOC6QYAPIVqQRPDM-izH0KDe9W/exec"
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
            }
        ]
    }
}
