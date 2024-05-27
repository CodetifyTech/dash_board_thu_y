import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AdminPage from "./pages/AdminPage/AdminPage";
import MyProfile from "./pages/HostPage/MyProfile";
import HostLayout from "./pages/HostPage/Layout";
import PageA from "./pages/HostPage/PageA";
import PageB from "./pages/HostPage/PageB";
import routers from "./router/HostRouter";

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/admin" element={<AdminPage />}></Route>
          <Route path="/" element={<MyProfile />}></Route>
          <Route path="/a" element={<HostLayout>
            <PageA />
          </HostLayout>}></Route>
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
