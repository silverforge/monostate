import { useQuery } from "@tanstack/react-query"
import { getPostList } from "../api/posts";

export const GET_POST_LIST_ID = '@blog/getPostList' as const;

export const usePostListQuery = () => {
  const postListResults = useQuery({
    queryFn: async () => await getPostList(),
    queryKey: [GET_POST_LIST_ID],
  });

  return postListResults;
}
