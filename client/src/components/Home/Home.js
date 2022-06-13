import React from "react";
import { Box, Container, Grid } from "@mui/material";
import { Budget } from "../dashboard/budget";
import { LatestOrders } from "../dashboard/latest-orders";
import { LatestProducts } from "../dashboard/latest-products";
import { TasksProgress } from "../dashboard/tasks-progress";
import { TotalCustomers } from "../dashboard/total-customers";
import { TotalProfit } from "../dashboard/total-profit";
import { TrafficByDevice } from "../dashboard/traffic-by-device";

export default function HomePage() {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth={false}>
        <Grid container spacing={3}>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <Budget />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <TotalCustomers />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <TasksProgress />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <TotalProfit sx={{ height: "100%" }} />
          </Grid>

          <Grid item lg={6} md={6} xl={3} xs={12}>
            <TrafficByDevice sx={{ height: "100%" }} />
          </Grid>
          <Grid item lg={6} md={6} xl={3} xs={12}>
            <LatestProducts sx={{ height: "100%" }} />
          </Grid>
          <Grid item lg={12} md={12} xl={9} xs={12}>
            <LatestOrders />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
