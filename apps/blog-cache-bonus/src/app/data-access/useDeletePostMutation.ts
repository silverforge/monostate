import { deletePost } from "@monostate/client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { GET_POST_LIST_ID } from "./usePostListQuery";
import { GET_POST_ID } from "./usePostQuery";

export const DELETE_POST_ID = '@blog/deletePost' as const;

export const useDeletePostMutation = () => {
  const queryClient = useQueryClient();

  const deletePostResults = useMutation({
    mutationFn: async (variables: { id: string }) => await deletePost(variables.id),
    mutationKey: [DELETE_POST_ID],
    onSettled: () => {
      queryClient.invalidateQueries([GET_POST_LIST_ID]);
      queryClient.invalidateQueries([GET_POST_ID]);
    }
  });

  return deletePostResults;
}