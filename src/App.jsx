import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AdminPage from "./pages/AdminPage/AdminPage";
import HostLayout from "./pages/HostPage/layout/Layout";
import routers from "./router/HostRouter";

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/admin" element={<AdminPage />}></Route>
          {
            routers.map(router => (<Route key={router.key} path={router.path} element={<HostLayout>
              {router.component}
            </HostLayout>}></Route>))
          }


        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
