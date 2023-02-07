import { updatePost } from "@monostate/client";
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { GET_POST_LIST_ID } from "./usePostListQuery";
import { GET_POST_ID } from "./usePostQuery";

export const UPDATE_POST_ID = '@blog/updatePost' as const;

export const useUpdatePostMutation = () => {
  const queryClient = useQueryClient();

  const updatePostResults = useMutation({
    mutationFn: async (variables: { id: string, title: string, text: string }) => await updatePost(variables.id, variables.title, variables.text),
    mutationKey: [UPDATE_POST_ID],
    onSettled: () => {
      queryClient.invalidateQueries([GET_POST_LIST_ID]);
      queryClient.invalidateQueries([GET_POST_ID]);
    },
  });

  return updatePostResults;
}