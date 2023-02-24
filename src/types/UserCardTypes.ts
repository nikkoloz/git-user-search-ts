import { UserProps } from "./UserProps";
export type UserCardTypes = {
  darkMode: boolean;
  setUser: React.Dispatch<React.SetStateAction<UserProps | null>>;
  user: UserProps;
};
