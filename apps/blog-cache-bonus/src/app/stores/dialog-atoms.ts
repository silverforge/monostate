import { atom } from "jotai";

export const isEditDialogOpenAtom = atom<boolean>(false);
export const isDeleteDialogOpenAtom = atom<boolean>(false);
export const selectedPostIdAtom = atom<string | undefined>(undefined);

// atoms with custom READ WRITE functions
export const openEditDialogAtom = atom(
  (get) => get(isEditDialogOpenAtom),
  (_get, set, postId: string | undefined) => {
    set(isEditDialogOpenAtom, true);
    set(selectedPostIdAtom, postId);
  },
);
export const closeEditDialogAtom = atom(
  (get) => get(isEditDialogOpenAtom),
  (_get, set) => set(isEditDialogOpenAtom, false),
);

export const openDeleteDialogAtom = atom(
  (get) => get(isDeleteDialogOpenAtom),
  (_get, set, postId: string | undefined) => {
    set(isDeleteDialogOpenAtom, true);
    set(selectedPostIdAtom, postId);
  },
);
export const closeDeleteDialogAtom = atom(
  (get) => get(isDeleteDialogOpenAtom),
  (_get, set) => set(isDeleteDialogOpenAtom, false)
);
