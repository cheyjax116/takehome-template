import { atom } from "recoil";

export const usernameAtom = atom({
    key: "username",
    default: null,
  });
  export const countAtom = atom({
    key: "count",
    default: 0,
  });
