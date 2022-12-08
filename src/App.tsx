import { PATH } from "constants/path";
import PrimaryLayout from "layouts/PrimaryLayout";
import HomePage from "pages/HomePage";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path={PATH.home} element={<PrimaryLayout />}>
            <Route index element={<HomePage />} />
          </Route>
        </Routes>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
