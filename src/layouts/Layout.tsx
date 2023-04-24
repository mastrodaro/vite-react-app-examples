import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Navigation from "@/components/Navigation";
import classes from "./Layout.module.scss";

const Layout = () => {
  const navigation = useNavigation();

  return (
    <main>
      <h1>Main Layout</h1>
      <Navigation />
      <div className={navigation.state === "loading" ? classes.loading : ""}>
        <Outlet />
      </div>
    </main>
  );
};

export default Layout;
