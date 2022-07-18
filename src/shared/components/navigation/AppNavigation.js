import React, { Fragment } from "react";
import LeftMenu from "./LeftMenu";
import MainHeader from "./MainHeader";

export default function AppNavigation() {
  return (
    <Fragment>
      <MainHeader />
      <LeftMenu />
    </Fragment>
  );
}
