import React from "react";
import Loader from "./components/Loader";
import Routes from "./routes";

function App() {
  const [pageLoader, setPageLoader] = React.useState(true);

  return <>{pageLoader ? <Loader /> : <Routes />}</>;
}

export default App;
