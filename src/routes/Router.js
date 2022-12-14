import { lazy } from "react";
import { Navigate } from "react-router-dom";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/

const Starter = lazy(() => import("../views/Starter.js"));
const Apply = lazy(() => import("../views/Apply.js"));
const Test = lazy(() => import("../views/Test.js"));
const Test2 = lazy(() => import("../views/Test2.js"));
const Test3 = lazy(() => import("../views/Test3.js"));
const Saved = lazy(() => import("../saved.js"));
const Recommend = lazy(() => import("../views/Recommend.js"));
// const Alerts = lazy(() => import("../views/ui/Alerts"));
// const Badges = lazy(() => import("../views/ui/Badges"));
const Buttons = lazy(() => import("../views/ui/Buttons"));
const Cards = lazy(() => import("../views/ui/Cards"));
const Grid = lazy(() => import("../views/ui/Grid"));
const Tables = lazy(() => import("../views/ui/Tables"));
const Forms = lazy(() => import("../views/ui/Forms"));
const Breadcrumbs = lazy(() => import("../views/ui/Breadcrumbs"));
const Applications = lazy(() => import("../views/Applications.js"));
const Info = lazy(() => import("../views/Info.js"));

/*****Routes******/

const ThemeRoutes = [
    {
        path: "/",
        element: <FullLayout />,
        children: [
            { path: "/", element: <Navigate to="/starter" /> },
            { path: "/test", exact: true, element: <Test /> },
            { path: "/test2", exact: true, element: <Test2 /> },
            { path: "/test3", exact: true, element: <Test3 /> },
            { path: "/saved", exact: true, element: <Saved /> },
            { path: "/starter/*", exact: true, element: <Starter /> },
            { path: "/apply", exact: true, element: <Apply /> },
            // { path: "/apply/:opening_id", exact: true, element: <Apply /> },
            { path: "/saved", exact: true, element: <Saved /> },
            { path: "/recommend", exact: true, element: <Recommend /> },
            { path: "/buttons", exact: true, element: <Buttons /> },
            { path: "/cards", exact: true, element: <Cards /> },
            { path: "/grid", exact: true, element: <Grid /> },
            { path: "/table", exact: true, element: <Tables /> },
            { path: "/forms", exact: true, element: <Forms /> },
            { path: "/breadcrumbs", exact: true, element: <Breadcrumbs /> },
            { path: "/applications", exact: true, element: <Applications /> },
            { path: "/info", exact: true, element: <Info /> },
        ],
    },
];

export default ThemeRoutes;
