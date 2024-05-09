import { FC } from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";

const Layout: FC = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;