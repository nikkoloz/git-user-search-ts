import searchIcon from "../assets/search.svg";
import getUser from "../http/getUser";
import { useState } from "react";
import { UserProps } from "../App";
import { FormEventHandler, FormEvent } from "react";
import axios from "axios";
type Props = {
  darkMode: boolean;
  setUser: React.Dispatch<React.SetStateAction<UserProps | null>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const SearchForm: React.FC<Props> = ({ darkMode, setUser, setLoading }) => {
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
