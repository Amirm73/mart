import { getPostsController } from "$/lib/api/controllers/query/getPostsController";
import { useQuery } from "@tanstack/react-query";

export function useGetPosts() {
  return useQuery(["posts"], getPostsController);
}
