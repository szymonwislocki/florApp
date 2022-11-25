const Home = () => {
  return (
    <div className="home">
      <h1 className="home__header">Witaj w domu!</h1>
      <div className="home__notifications">
        Bieżące komunikaty:
      </div>
      <div className="blockmenu">
        Sugestie działań:
        <div className="blockmenu__itemblocks">{/* items */}</div>
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
