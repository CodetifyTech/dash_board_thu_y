import { Flex, Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

function HostLayout({ children }) {
  return (
    <>
      <Layout className='h-[100vh]'>
        <Sider width="25%" >
          Sider
        </Sider>
        <Layout>
          <Header className='bg-red-500'>Header</Header>
          <Content>
            {children}
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </>

  );
}

export default HostLayout;