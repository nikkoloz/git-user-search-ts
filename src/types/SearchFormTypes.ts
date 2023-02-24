import type { UserProps } from "./UserProps";
export type SearchFormTypes = {
  darkMode: boolean;
  setUser: React.Dispatch<React.SetStateAction<UserProps | null>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};
