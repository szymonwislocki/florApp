import { ReactElement, useContext } from "react";
import { DataContext } from "../providers/DataProvider";

const Notifications = (): ReactElement => {
  const { alerts } = useContext(DataContext);
  return (
    <div className="home__notifications">
      Bieżące komunikaty:
      {/* Not implemented */}
      <>{alerts.length ? alerts.map((el) => console.log(el)) : <p>Brak bieżących powiadomień.</p>}</>
    </div>
  );
};

export default Notifications;
