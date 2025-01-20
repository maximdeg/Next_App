import "server-only";
// Querying with "sanityFetch" will keep content automatically updated
// Before using it, import and render "<SanityLive />" in your layout, see
// https://github.com/sanity-io/next-sanity#live-content-api for more information.
import { ClientConfig, defineLive } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { apiVersion, dataset, projectId } from "@/sanity/env";
import { serverToken, browserToken } from "@/sanity/env"; // Import the tokens

export const { sanityFetch, SanityLive } = defineLive({
  client: client.withConfig({
    apiVersion,
    // Provide the serverToken for server-side rendering
    serverToken,
    // Provide the browserToken for client-side rendering
    browserToken,
  } as ClientConfig & { serverToken: string; browserToken: string }),
});
