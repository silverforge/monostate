import { atom } from "jotai";
import { MainRoute } from "../routes/main-router";

export const selectedMenuItemAtom = atom<MainRoute>(MainRoute.home);
