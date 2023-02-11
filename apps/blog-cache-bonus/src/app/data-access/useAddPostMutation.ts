import { addPost } from "@monostate/client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { GET_POST_LIST_ID } from "./usePostListQuery";
import { GET_POST_ID } from "./usePostQuery";

export const ADD_POST_ID = '@blog/addPost' as const;

export const useAddPostMutation = () => {
  const queryClient = useQueryClient();

  const addPostResults = useMutation({
    mutationFn: async (variables: { title: string, text: string }) => await addPost(variables.title, variables.text),
    mutationKey: [ADD_POST_ID],
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [GET_POST_LIST_ID] });
      queryClient.invalidateQueries([GET_POST_ID]);
    }
  });

  return addPostResults;
}