import { useQuery } from "@tanstack/react-query"
import { getPost } from "../api/posts";

export const GET_POST_ID = '@blog/getPost' as const;

export const usePostQuery = (id: string | undefined) => {
  const postResults = useQuery({
    queryFn: async () => await getPost(id || ""),
    queryKey: [GET_POST_ID, id],
    enabled: !!id,
  });

  return postResults;
}