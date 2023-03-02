import { createClient } from "microcms-js-sdk";

export const Client = createClient({
  serviceDomain: "ponsuke", // YOUR_DOMAIN is the XXXX part of XXXX.microcms.io
  apiKey: process.env.NEXT_PUBLIC_X_API_KEY,
});
