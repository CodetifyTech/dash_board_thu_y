import { Flex, Layout } from 'antd';
import PageA from './PageA';
import PageB from './PageB';
import { Route, Routes } from 'react-router-dom';
const { Header, Footer, Sider, Content } = Layout;
function MyProfile({ match }) {
  return (
    <>
      <Layout className='h-[100vh]'>
        <Sider width="25%" >
          Sider
        </Sider>
        <Layout>
          <Header className='bg-red-500'>Header</Header>
          <Content>
            <Routes>
              <Route path={`${match.path}/a`} element={<PageA />} key={'a'}></Route>
              <Route path="/b" element={<PageB />} key={'b'}></Route>
            </Routes>
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </>
  );
}

export default MyProfile;