import {  FC, useContext } from "react";
import { DataContext } from "../providers/DataProvider";
import Devices from "./Devices";
import Header from "./Header";
import Notifications from "./Notifications";
import Rooms from "./Rooms";
import Weather from "./Weather";

const Home : FC = ()  => {
  const { loaded } = useContext(DataContext);

  return (
    <>
      {loaded ? (
        <div className="home">
          <Header />
          <Notifications />
          <Weather />
          {/* <Suggestions /> */}
          <Rooms />
          <Devices />
        </div>
      ) : null}
    </>
  );
};
export default Home;
