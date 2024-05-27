import { lazy } from "react";

const PageA = lazy(() => import("./HostPage/PageA"));

export {
    PageA
}