import { useEffect, useState } from "react";
import SearchForm from "./components/searchForm";
import UserCard from "./components/UserCard";
import Header from "./components/Header";
import Loading from "./components/Loading";

export type UserProps = {
  avatar_url: string;
  bio: string | null;
  blog: string;
  company: null;
  created_at: string;
  followers: number;
  following: number;
  public_repos: number;
  name: string;
  login: string;
  location: string | null;
  twitter_username: string | null;
};

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [user, setUser] = useState<UserProps | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (localStorage.getItem("DARKMODE") === null) {
      console.log("err");

      localStorage.setItem("DARKMODE", JSON.stringify(darkMode));
    } else {
      const dark: boolean = JSON.parse(
        localStorage.getItem("DARKMODE") || "true"
      );
      setDarkMode(dark);
    }
    if (localStorage.getItem("USER"))
      localStorage.setItem("USER", JSON.stringify({}));
    else setUser(JSON.parse(localStorage.getItem("USER") || ""));
  }, []);

  return (
    <div
      className={`w-full min-h-screen pt-6 sm400:pt-14 md800:pt-20 ${
        darkMode ? "bg-main-dark-bg" : "bg-main-gray-light"
      }`}
    >
      <div className=" w-[327px] sm400:w-[573px] md800:w-[730px] pb-10 mx-auto">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <SearchForm
          setUser={setUser}
          darkMode={darkMode}
          setLoading={setLoading}
        />
        {loading && <Loading />}
        {user && <UserCard user={user} setUser={setUser} darkMode={darkMode} />}
      </div>
    </div>
  );
}

export default App;
