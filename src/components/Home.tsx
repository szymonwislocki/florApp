import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import BlockItem from "./BlockItem";

const Home = (): ReactElement => {
  const navigate = useNavigate();

  const handleLogOut = (): void => {
    localStorage.removeItem("clientIP");
    navigate("/login");
  };

  return (
    <div className="home">
      <div className="home__header">
        <h1>Witaj w domu!</h1>
        <button className="home__button" onClick={handleLogOut}>
          Wyloguj
        </button>
      </div>
      <div className="home__notifications">Bieżące komunikaty:</div>

      <div className="blockmenu">
        Sugestie działań:
        <div className="blockmenu__itemblocks">
          {/* items */}
          <BlockItem />
        </div>
      </div>
      <div className="blockmenu">
        Pomieszczenia:
        <div className="blockmenu__itemblocks">{/* items */}</div>
      </div>
      <div className="blockmenu">
        Urządzenia:
        <div className="blockmenu__itemblocks">{/* items */}</div>
      </div>
    </div>
  );
};

export default Home;
