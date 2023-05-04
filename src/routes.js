import React from "react";

const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));
const Charts = React.lazy(() => import("./views/charts/Charts"));
const Widgets = React.lazy(() => import("./views/widgets/Widgets"));
const Orders = React.lazy(() => import("./views/orders/Orders"));

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", name: "Dashboard", element: Dashboard },
  { path: "/charts", name: "Charts", element: Charts },
  { path: "/orders", name: "Orders", element: Orders },
  { path: "/widgets", name: "Widgets", element: Widgets },
];

export default routes;
