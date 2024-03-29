import React from "react";
import PropTypes from "prop-types";
import { Box, Button, ListItem } from "@mui/material";
import { useLocation, Link } from "react-router-dom";

export const NavItem = (props) => {
  const { href, icon, title, ...others } = props;
  const location = useLocation();
  console.log({ href, location });
  const active = href ? location.pathname === href : false;

  return (
    <ListItem
      disableGutters
      sx={{
        display: "flex",
        mb: 0.5,
        py: 0,
        px: 2,
      }}
      {...others}
    >
      <Link to={href} passHref>
        <Button
          //component="a"
          startIcon={icon}
          disableRipple
          onClick={() => {
            if (title === "logout") {
              localStorage.clear();
              window.location.reload();
            }
          }}
          sx={{
            textDecoration: "none",
            backgroundColor: active && "rgba(255,255,255, 0.08)",
            borderRadius: 1,
            color: active ? "secondary.main" : "neutral.300",
            fontWeight: active && "fontWeightBold",
            justifyContent: "space-between",
            px: 3,
            textAlign: "left",
            textTransform: "none",
            py: "11px",
            "& .MuiButton-startIcon": {
              color: active ? "secondary.main" : "neutral.400",
            },
            "&:hover": {
              backgroundColor: "rgba(255,255,255, 0.08)",
            },
          }}
        >
          <Box sx={{ flexGrow: 1 }}>{title}</Box>
        </Button>
      </Link>
    </ListItem>
  );
};

NavItem.propTypes = {
  href: PropTypes.string,
  icon: PropTypes.node,
  title: PropTypes.string,
};
