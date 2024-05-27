import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AdminPage from "./pages/AdminPage/AdminPage";
import HostLayout from "./pages/HostPage/layout/Layout";
import routers from "./router/HostRouter";
import { ConfigProvider } from "antd";
import { themeDark, themeLight } from "./utils/customDesign";
import { Suspense, useContext, useState } from "react";
import { AppContext } from "./pages/Context";
import Loading from "./pages/HostPage/layout/Loading";

function App() {
    const { isDarkMode } = useContext(AppContext);

    return (
        <>
            <ToastContainer />
            <ConfigProvider theme={isDarkMode ? themeDark : themeLight}>
                <Suspense fallback={<Loading />}>
                    <BrowserRouter>
                        <Routes>
                            <Route
                                path="/admin"
                                element={<AdminPage />}
                            ></Route>
                            {routers.map((router) => (
                                <Route
                                    key={router.key}
                                    path={router.path}
                                    element={
                                        <HostLayout>
                                            <router.component/>
                                        </HostLayout>
                                    }
                                />
                            ))}
                        </Routes>
                    </BrowserRouter>
                </Suspense>
            </ConfigProvider>
        </>
    );
}

export default App;
