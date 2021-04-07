import React from "react";

import Aux from "../Auxillary/Auxillary";
import Toolbar from "../../components/navigation/Toolbar/Toolbar";

const Layout = (props) => {
  //!TODO PROPER TOOLBAR AND SideDrawer

  return (
    <Aux>
      <Toolbar />
      <main>{props.children}</main>
    </Aux>
  );
};

export default Layout;
