import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export type DialogState = {
  isEditDialogOpen: boolean;
  isDeleteDialogOpen: boolean;
  selectedPostId: string | undefined;

  openEditDialog: (postId: string) => void;
  closeEditDialog: () => void;

  openDeleteDialog: (postId: string) => void;
  closeDeleteDialog: () => void;
}

export const useDialogStore = create(devtools<DialogState>((set) => ({
  isEditDialogOpen: false,
  isDeleteDialogOpen: false,
  selectedPostId: undefined,

  openEditDialog: (postId: string) => set({ isEditDialogOpen: true, selectedPostId: postId }),
  closeEditDialog: () => set({ isEditDialogOpen: false, selectedPostId: undefined }),

  openDeleteDialog: (postId: string) => set({ isDeleteDialogOpen: true, selectedPostId: postId }),
  closeDeleteDialog: () => set({ isDeleteDialogOpen: false, selectedPostId: undefined }),
}), {
  name: '[BLOG] Dialog State',
  enabled: process.env.NODE_ENV === 'development'
}));
