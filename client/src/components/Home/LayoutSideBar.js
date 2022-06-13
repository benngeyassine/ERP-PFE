/* eslint-disable react/react-in-jsx-scope */
import React from "react";
import PropTypes from "prop-types";
import { Box, Divider, Drawer, useMediaQuery } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { ChartBar as ChartBarIcon } from "../icons/chart-bar";
import { Cog as CogIcon } from "../icons/cog";
import { Lock as LockIcon } from "../icons/lock";
import { Selector as SelectorIcon } from "../icons/selector";
import { ShoppingBag as ShoppingBagIcon } from "../icons/shopping-bag";
import { User as UserIcon } from "../icons/user";
import { UserAdd as UserAddIcon } from "../icons/user-add";
import { Users as UsersIcon } from "../icons/users";
import { XCircle as XCircleIcon } from "../icons/x-circle";
import { companyLogo } from "./logo.jpg";
import { NavItem } from "./nav-item";
import { Link } from "react-router-dom";
let token = localStorage.getItem("token");

export const DashboardSidebar = (props) => {
  const { open, onClose } = props;
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"), {
    defaultMatches: true,
    noSsr: false,
  });

  const content = (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <div>
          <Box sx={{ p: 3 }}>
            <Link to="/" passHref>
              <a href="#/">
                <img src={companyLogo} height={40} alt="VAGA ALARM" />
              </a>
            </Link>
          </Box>
          <Box sx={{ px: 1 }}>
            <Box
              sx={{
                alignItems: "center",
                backgroundColor: "rgba(255, 255, 255, 0.04)",
                cursor: "pointer",
                display: "flex",
                justifyContent: "space-between",
                px: 3,
                py: "11px",
                borderRadius: 1,
              }}
            >
              Vaga Alarm
            </Box>
          </Box>
        </div>
        <Divider
          sx={{
            borderColor: "#2D3748",
            my: 3,
          }}
        />
        <Box
          sx={{
            px: 1,
            alignItems: "center",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            py: "11px",
            borderRadius: 1,
            flexGrow: 1,
          }}
        >
          <NavItem
            key="Dashboard"
            href="/"
            icon={<ChartBarIcon fontSize="small" />}
            title="Dashboard"
          />
          <NavItem
            key="Customers"
            href="/customers"
            icon={<UsersIcon fontSize="small" />}
            title="Customers"
          />
          <NavItem
            key="Products"
            href="/products"
            icon={<ShoppingBagIcon fontSize="small" />}
            title="Products"
          />
          <NavItem
            key="Employers"
            href="/employers"
            icon={<UserIcon fontSize="small" />}
            title="employers"
          />
          <NavItem
            key="logout"
            href="/login"
            icon={<LockIcon fontSize="small" />}
            title="logout"
          />
        </Box>
        <Divider sx={{ borderColor: "#2D3748" }} />
        <Box
          sx={{
            px: 2,
            py: 3,
          }}
        ></Box>
      </Box>
    </>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: "neutral.900",
            color: "#FFFFFF",
            width: 280,
          },
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: "neutral.900",
          color: "#FFFFFF",
          width: 280,
        },
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

DashboardSidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
};
