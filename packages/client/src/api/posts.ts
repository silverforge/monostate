import axiosInstance from "../axios-instance";
import { AddPostAsyncResponse, DeletePostAsyncResponse, Post } from "../typedefs";

export const getPostList = async () => (await axiosInstance.get<Post[]>('posts')).data;

export const getPost = async (id: string) => (await axiosInstance.get<Post>(`posts/${id}`)).data;

export const addPost = async (title: string, text: string) => (await axiosInstance.post<AddPostAsyncResponse>('posts', {
  title,
  text,
})).data;

export const updatePost = async (id: string, title: string, text: string) => {
  if (!id) return;

  return (await axiosInstance.post<Post>(`posts/${id}`, {
    title,
    text
  })).data;
}

export const deletePost = async (id: string) => {
  if (!id) return;

  return (await axiosInstance.delete<DeletePostAsyncResponse>(`posts/${id}`)).data;
}
