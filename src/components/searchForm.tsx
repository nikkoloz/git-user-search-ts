import searchIcon from "../assets/search.svg";
import getUser from "../http/getUser";
import { useState } from "react";
import { UserProps } from "../App";
import { FormEventHandler, FormEvent } from "react";
import { AxiosError } from "axios";
type Props = {
  darkMode: boolean;
  setUser: React.Dispatch<React.SetStateAction<UserProps | null>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const SearchForm: React.FC<Props> = ({ darkMode, setUser, setLoading }) => {
  const [searchText, setSearchText] = useState("");
  const [getUserError, setGetUserError] = useState("");
  const handleSearch: FormEventHandler = async (e: FormEvent<Element>) => {
    e.preventDefault();
    setLoading(true);
    setUser(null);

    if (searchText !== "") {
      setSearchText("");
      try {
        const response = await getUser(searchText);
        setUser(response.data);
        localStorage.setItem("USER", JSON.stringify(response.data));
        setLoading(false);
      } catch (error) {
        const err = error as AxiosError;
        if (err.response) setGetUserError(err.response.data?.message);
        else if (err.message) setGetUserError(err.message);
        setLoading(false);
      }
    } else {
      setGetUserError("empty");
    }
  };
  return (
    <>
      <form
        onSubmit={handleSearch}
        className={`mb-10 flex rounded-lg p-2 items-center ${
          darkMode ? "bg-main-dark-light" : "bg-white"
        }`}
      >
        <img
          alt="search icon"
          src={searchIcon}
          className="mr-2 sm400:mr-6 ml-6"
        />
        <input
          placeholder="Search GitHub username…"
          className={`text-xsm sm400:text-base w-full mr-2 focus:outline-none ${
            darkMode && "bg-main-dark-light text-white"
          }`}
          value={searchText}
          onChange={(e) => {
            setGetUserError("");
            setSearchText(e.target.value);
          }}
        />
        {getUserError && (
          <span
            className={`text-main-red font-bold ml-auto mr-2 sm400:mr-6 whitespace-nowrap`}
          >
            {getUserError}
          </span>
        )}
        <button
          type="submit"
          className="font-bold text-xsm14 sm400:text-n text-white bg-main-blue rounded-lg py-3 px-4"
        >
          Search
        </button>
      </form>
    </>
  );
};

export default SearchForm;
