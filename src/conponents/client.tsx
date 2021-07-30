import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "ponsuke", // YOUR_DOMAIN is the XXXX part of XXXX.microcms.io
  apiKey: process.env.X_API_KEY,
});
