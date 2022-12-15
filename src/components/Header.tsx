import moon from "../assets/moon.svg";
import sun from "../assets/sun.svg";

type Props = {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header: React.FC<Props> = ({ darkMode, setDarkMode }) => {
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
      className={`flex justify-between mb-9 ${
        darkMode ? "bg-main-dark-bg" : "bg-main-gray-light"
      }`}
    >
      <h1 className={`font-bold text-xl ${darkMode ? "text-white" : ""}`}>
        devfinder
      </h1>
      {!darkMode ? (
        <button onClick={changeDarkMode} className="flex items-center">
          <p className={`font-bold text-xsm text-main-gray2`}>
            LET THERE BE DARK
          </p>
          <img alt="moon" src={moon} className="ml-4" />
        </button>
      ) : (
        <button onClick={changeDarkMode} className="flex items-center">
          <p className="font-bold text-xsm text-white">LET THERE BE LIGHT</p>
          <img alt="sun" src={sun} className="ml-4" />
        </button>
      )}
    </div>
  );
};
export default Header;
