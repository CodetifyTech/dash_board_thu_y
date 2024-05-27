import { Layout } from "antd";
import HostHeader from "./Header";
import HostSidebar from "./Sidebar";

function HostLayout({ children }) {
    const { Footer, Content } = Layout;
    return (
        <>
            <Layout className="h-[100vh]">
                <HostHeader />
                <Layout>
                    <HostSidebar />
                    <Layout>
                        <Content className="overflow-auto p-5">
                            {children}
                        </Content>
                        <Footer className="">Footer</Footer>
                    </Layout>
                </Layout>
            </Layout>
        </>
    );
}

export default HostLayout;
