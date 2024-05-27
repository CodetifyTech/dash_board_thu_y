import PageA from "../pages/HostPage/PageA";
const routers = [
    {
        key: "a",
        path: "/a",
        component: PageA,
    },
    {
        key: "/",
        path: "/",
        component: PageA,
    },
];

export default routers;