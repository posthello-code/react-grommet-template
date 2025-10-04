import "./App.css";
import { NavBar } from "./NavBar";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { Grommet } from "grommet";
import Home from "./content/Home";
import Error from "./content/Error";

function Layout() {
  return (
    <div>
      <title>{(document.title = "Alex Jensen")}</title>
      <div className="App">
        <div id="nav-header">
          <Grommet id="grommet">
            <NavBar />
          </Grommet>
        </div>
        <div>
          {/* Render the content for current page based on Browser router state below*/}
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
