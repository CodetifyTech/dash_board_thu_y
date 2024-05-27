import { Layout } from "antd";


const HostHeader = () => {
    const { Header } = Layout;
    return (
        <Header className="flex justify-between  bg-yellow-300">
            <div className="text-white">Logo</div>
            <div>

            </div>
        </Header>
    );
}
export default HostHeader;