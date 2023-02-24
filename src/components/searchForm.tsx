import searchIcon from "../assets/search.svg";
import getUser from "../http/getUser";
import { useState } from "react";
import { FormEventHandler, FormEvent } from "react";
import axios from "axios";
import type { SearchFormTypes } from "../types/SearchFormTypes";

const SearchForm: React.FC<SearchFormTypes> = ({
  darkMode,
  setUser,
  setLoading,
}) => {
  const [searchText, setSearchText] = useState<string>("");
  const [getUserError, setGetUserError] = useState<string>("");
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
      } catch (error) {
        if (axios.isAxiosError(error)) {
          if (error.response) {
            setGetUserError(error.response.data?.message);
          } else if (error.message) {
            setGetUserError(error.message);
          }
        }
      }
    } else {
      setGetUserError("empty");
    }
    setLoading(false);
  };
  return (
    <>
      <form
        onSubmit={handleSearch}
        className={`mb-10 flex items-center rounded-lg p-2 
        ${darkMode ? "bg-main-dark-light" : "bg-white"}`}
      >
        <img
          alt="search icon"
          src={searchIcon}
          className="mr-2 ml-2 sm400:mr-6 md800:ml-6"
        />
        <input
          placeholder="Search GitHub username…"
          className={`mr-2 w-full text-xsm focus:outline-none sm400:text-base 
          ${darkMode && "bg-main-dark-light text-white"}`}
          value={searchText}
          onChange={(e) => {
            setGetUserError("");
            setSearchText(e.target.value);
          }}
        />
        {getUserError && (
          <span
            className={`ml-auto mr-2 whitespace-nowrap font-bold text-main-red sm400:mr-6`}
          >
            {getUserError}
          </span>
        )}
        <button
          type="submit"
          className="rounded-lg bg-main-blue py-3 px-4 text-xsm14 font-bold text-white sm400:text-n"
        >
          Search
        </button>
      </form>
    </>
  );
};

export default SearchForm;
