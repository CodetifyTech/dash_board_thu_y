import { Avatar, Layout } from "antd";
import { useContext } from "react";
import { AiOutlineMoon, AiOutlineSun } from "react-icons/ai";
import { AppContext } from "../../Context";


const HostHeader = () => {
    const { Header } = Layout;
    const {isDarkMode, toggleThemeMode} = useContext(AppContext);
    return (
        <Header className="flex justify-between border-b-[1px] border-gray-500  bg-white dark:bg-black" >
            <div className="">Logo</div>
            <div className="space-x-3 flex items-center ">
                <Avatar
                className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-300 cursor-pointer"
                >
                    H
                </Avatar>
                <div
                    className="cursor-pointer hover:bg-slate-300 dark:hover:bg-slate-700 p-2 rounded-md transition-all duration-300 fade"
                    onClick={toggleThemeMode}
                >
                    {isDarkMode ? (
                        <AiOutlineMoon className="w-6 h-6" />
                    ) : (
                        <AiOutlineSun className="w-6 h-6" />
                    )}
                </div>
            </div>
        </Header>
    );
}
export default HostHeader;