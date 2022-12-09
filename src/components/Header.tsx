import { NavigateFunction, useNavigate } from "react-router-dom";

const Header : React.FC = ()  => {
  const navigate: NavigateFunction = useNavigate();

  const handleLogOut = (): void => {
    localStorage.removeItem("clientIP");
    navigate("/login");
  };
  return (
    <div className="home__header">
      <h1>Witaj w domu!</h1>
      <button className="home__button" onClick={handleLogOut}>
        Wyloguj
      </button>
    </div>
  );
};

export default Header;
