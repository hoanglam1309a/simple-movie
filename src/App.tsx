import { PATH } from "constants/path";
import PrimaryLayout from "layouts/PrimaryLayout";
import HomePage from "pages/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path={PATH.home} element={<PrimaryLayout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
