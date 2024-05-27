import {  Layout } from 'antd';
import HostHeader from './Header';
import HostSidebar from './Sidebar';


function HostLayout({ children }) {
  const { Footer, Content } = Layout;
  return (
      <>
          <Layout className="h-[100vh]">
              <HostSidebar/>
              <Layout>
                  <HostHeader />
                  <Content>{children}</Content>
                  <Footer className="">Footer</Footer>
              </Layout>
          </Layout>
      </>
  );
}

export default HostLayout;