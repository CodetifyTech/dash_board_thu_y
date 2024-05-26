import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AdminPage from "./pages/AdminPage/AdminPage";
import MyProfile from "./pages/HostPage/Account/MyProfile";

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/admin" element={<AdminPage />}></Route>
          <Route path="/host" element={<MyProfile />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
