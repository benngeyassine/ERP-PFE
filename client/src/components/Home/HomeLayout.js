/* eslint-disable react/react-in-jsx-scope */
import React from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import { DashboardNavbar } from "./LayoutNavbar";
import { DashboardSidebar } from "./LayoutSideBar";

const DashboardLayoutRoot = styled("div")(({ theme }) => ({
  display: "flex",
  flex: "1 1 auto",
  maxWidth: "100%",
  paddingTop: 64,
  [theme.breakpoints.up("lg")]: {
    paddingLeft: 200,
  },
}));

export default function HomeLayout(props) {
  const { children } = props;
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <DashboardLayoutRoot>{children}</DashboardLayoutRoot>
      <DashboardNavbar onSidebarOpen={() => setSidebarOpen(true)} />
      <DashboardSidebar
        onClose={() => setSidebarOpen(false)}
        open={isSidebarOpen}
      />
    </>
  );
}
