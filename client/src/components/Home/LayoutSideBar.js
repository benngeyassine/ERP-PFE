/* eslint-disable react/react-in-jsx-scope */
import React from "react";
import PropTypes from "prop-types";
import { Box, Divider, Drawer, Typography, useMediaQuery } from "@mui/material";
import PointOfSaleRoundedIcon from "@mui/icons-material/PointOfSaleRounded";
import AssignmentIndRoundedIcon from "@mui/icons-material/AssignmentIndRounded";
import LocalOfferRoundedIcon from "@mui/icons-material/LocalOfferRounded";
import ReceiptRoundedIcon from "@mui/icons-material/ReceiptRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import InventoryRoundedIcon from "@mui/icons-material/InventoryRounded";
import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded";
import InsightsRoundedIcon from "@mui/icons-material/InsightsRounded";

import Logo from "./logo.svg";
import { NavItem } from "./nav-item";
import { Link } from "react-router-dom";
//let token = localStorage.getItem("token");

export const DashboardSidebar = (props) => {
  const { open, onClose } = props;
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"), {
    defaultMatches: true,
    noSsr: false,
  });
  let profile = localStorage.getItem("profile");
  console.log({ profile: JSON.parse(profile) });
  const role = JSON.parse(profile).type;
  console.log({ roletes: role === "cm" });
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
            <Link to="/" passHref underline="none">
              <a href="#/">
                <img src={Logo} alt="VAGA ALARM" style={{ height: "100px" }} />
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
              <Typography>Commercial</Typography>
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
            icon={<InsightsRoundedIcon fontSize="small" />}
            title="Dashboard"
          />
          {/* */}{" "}
          {(role === "cm" || role === "pdg") && (
            <>
              <NavItem
                key="Purchase"
                href="/purchase"
                icon={<PointOfSaleRoundedIcon fontSize="small" />}
                title="Purchase invoice"
              />

              <NavItem
                key="Sales"
                href="/sales"
                icon={<ReceiptRoundedIcon fontSize="small" />}
                title="Sales receipt"
              />
              <NavItem
                key="Customers"
                href="/customers"
                icon={<AssignmentIndRoundedIcon fontSize="small" />}
                title="Customers"
              />
              <NavItem
                key="Products"
                href="/products"
                icon={<LocalOfferRoundedIcon fontSize="small" />}
                title="Products"
              />
            </>
          )}
          <NavItem
            key="Employers"
            href="/employers"
            icon={<PersonRoundedIcon fontSize="small" />}
            title="employers"
          />
          <NavItem
            key="Projects"
            href="/projects"
            icon={<InventoryRoundedIcon fontSize="small" />}
            title="Projects"
          />{" "}
          {/*   */}
        </Box>
        <Divider sx={{ borderColor: "#2D3748" }} />
        <Box
          sx={{
            px: 2,
            py: 3,
          }}
        >
          <NavItem
            key="logout"
            href="/login"
            icon={<ExitToAppRoundedIcon fontSize="small" />}
            title="logout"
          />
        </Box>
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
