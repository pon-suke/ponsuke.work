// src/types/blog.ts
import { ContentResponse, ListContentsResponse } from "./api";

export type BlogListResponse = ListContentsResponse<BlogResponse>;

export type BlogResponse = ContentResponse<{
  title?: string;
  subtitle?: string;
  thumbnail?: string;
  main?: String;
}>;