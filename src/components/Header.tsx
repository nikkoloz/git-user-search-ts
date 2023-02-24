import moon from "../assets/moon.svg";
import sun from "../assets/sun.svg";
import type { HeaderTypes } from "../types/HeaderTypes";

const Header: React.FC<HeaderTypes> = ({ darkMode, setDarkMode }) => {
  const changeDarkMode = () => {
    if (darkMode === true) {
      setDarkMode(false);
      localStorage.setItem("DARKMODE", JSON.stringify(false));
    } else {
      setDarkMode(true);
      localStorage.setItem("DARKMODE", JSON.stringify(true));
    }
  };
  return (
    <div
      className={`mb-9 flex justify-between 
      ${darkMode ? "bg-main-dark-bg" : "bg-main-gray-light"}`}
    >
      <h1 className={`text-xl font-bold ${darkMode ? "text-white" : ""}`}>
        Devfinder
      </h1>
      {!darkMode ? (
        <button onClick={changeDarkMode} className="flex items-center">
          <p className={`text-xsm font-bold text-main-gray2`}>
            LET THERE BE DARK
          </p>
          <img alt="moon" src={moon} className="ml-4" />
        </button>
      ) : (
        <button onClick={changeDarkMode} className="flex items-center">
          <p className="text-xsm font-bold text-white">LET THERE BE LIGHT</p>
          <img alt="sun" src={sun} className="ml-4" />
        </button>
      )}
    </div>
  );
};
export default Header;
