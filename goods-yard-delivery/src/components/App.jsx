import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import MainPage from "../pages/MainPage";

function App() {
  return ( 
    <>
      <Header />
      <Routes>
        <Route path="/">
          <Route index element={<MainPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
