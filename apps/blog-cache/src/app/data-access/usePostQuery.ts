import { Post, getPost } from "@monostate/client";
import { useQuery } from "@tanstack/react-query"

export const GET_POST_ID = '@blog/getPost' as const;

export const usePostQuery = (id: string | undefined, onSuccess?: (data?: Post) => void) => {
  const postResults = useQuery({
    queryFn: async () => await getPost(id || ""),
    queryKey: [GET_POST_ID],
    enabled: !!id,
    onSuccess: onSuccess
  });

  return postResults;
}