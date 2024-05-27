import { Layout, theme } from "antd";

const themeDark = {
    algorithm: theme.darkAlgorithm,
    token: {
    
    },
    components: {
     
        Layout: {
            bodyBg: "#000000",
            siderBg: "#000000",
            headerBg: "#000000",
            footerBg: "#000000",
        },
        Button: {
            borderRadius: 8,
        },
        Table: {
            headerColor: "red",
        },
        Input: {},
    },
};

const themeLight = {
    algorithm: theme.defaultAlgorithm,
    token: {
     
    },
    components: {
    
        Layout: {
            bodyBg: "#FFFFFF",
            siderBg: "#FFFFFF",
            headerBg: "#FFFFFF",
            footerBg: "#FFFFFF",
        },
        Button: {
            borderRadius: 8,
        },
        Table: {
            headerColor: "#2263B3",
        },
    },
};
export { themeDark, themeLight };