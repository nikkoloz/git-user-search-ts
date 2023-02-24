import { useEffect, useState } from "react";
import SearchForm from "./components/searchForm";
import UserCard from "./components/UserCard";
import Header from "./components/Header";
import Loading from "./components/Loading";
import type { UserProps } from "./types/UserProps";

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [user, setUser] = useState<UserProps | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (localStorage.getItem("DARKMODE") === null) {
      localStorage.setItem("DARKMODE", JSON.stringify(darkMode));
    } else {
      const dark: boolean = JSON.parse(
        localStorage.getItem("DARKMODE") || "true"
      );
      setDarkMode(dark);
    }
    if (localStorage.getItem("USER"))
      localStorage.setItem("USER", JSON.stringify({}));
    else {
      const user: UserProps = JSON.parse(localStorage.getItem("USER") || "{}");
      setUser(user);
    }
  }, []);

  return (
    <div
      className={`min-h-screen w-full px-6 pt-6 sm400:px-8 sm400:pt-14 md800:px-10 md800:pt-20 
      ${darkMode ? "bg-main-dark-bg" : "bg-main-gray-light"}`}
    >
      <div className="mx-auto max-w-[730px] pb-10">
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
