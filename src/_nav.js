import React from "react";
import CIcon from "@coreui/icons-react";
import {
  cilSpeedometer,
  cilPeople,
  cilSettings,
  cilLibrary,
  cilCopy,
  cilRss
} from "@coreui/icons";
import { CNavGroup, CNavItem } from "@coreui/react";

const _nav = [
  {
    component: CNavItem,
    name: "Dashboard",
    to: "/dashboard",
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: "Users",
    to: "/users",
    icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: "Clients",
        to: "/users/clients",
      },
      {
        component: CNavItem,
        name: "Admins",
        to: "/users/admins",
      },
    ],
  },
  {
    component: CNavItem,
    name: "Services",
    to: "/users",
    icon: <CIcon icon={cilSettings} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Category",
    to: "/category",
    icon: <CIcon icon={cilLibrary} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Service providers",
    to: "/services/providers",
    icon: <CIcon icon={cilSettings} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Orders",
    to: "/orders",
    icon: <CIcon icon={cilCopy} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Reports",
    to: "/reports",
    icon: <CIcon icon={cilRss} customClassName="nav-icon" />,
  },
];

export default _nav;
