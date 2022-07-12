import React from "react";
import Loader from "./components/Loader.Building";
import Routes from "./routes";

function App() {
  const [pageLoader, setPageLoader] = React.useState(true);

  const action = "active";
  if (action === "desactive") setPageLoader(false);

  return <>{pageLoader ? <Loader /> : <Routes />}</>;
}

export default App;
