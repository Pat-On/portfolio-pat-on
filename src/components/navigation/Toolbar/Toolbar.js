import React from "react";

import NavigationItems from "../NavigationItems/NavigationItems";

const Toolbar = (props) => {
  return (
    <header>
      <nav>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default Toolbar;
