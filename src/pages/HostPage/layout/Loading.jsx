import { Spin } from "antd";

const Loading = () => {
    return (
        <div className=" fixed z-50  w-full bg-white  flex flex-col justify-center h-[100svh] items-center">
            <Spin size="large" />
        </div>
    );
};

export default Loading;
