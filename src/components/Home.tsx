import { ReactElement, useContext } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { deviceTypes } from "../data/devicetypes";
import { DataContext } from "../providers/DataProvider";
import Device from "./Device";
import BlockItem from "./Device";
import Devices from "./Devices";
import Header from "./Header";
import Notifications from "./Notifications";
import Room from "./Room";
import Rooms from "./Rooms";
import Suggestions from "./Suggestions";

const Home = (): ReactElement => {

  const { allRooms } = useContext<ContextTypes>(DataContext);

  console.log(allRooms);
  return (
    <div className="home">
      <Header />
      <Notifications />
      <Suggestions />
      <Rooms />
      <Devices />
    </div>
  );
};

export default Home;
