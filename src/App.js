import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import ProTip from "./ProTip";
import Dashboard from "./Dashboard";
import SignIn from "./SignIn";
import Layout from "./Layout";

export default function App() {
  return (
    <Layout>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            <Typography variant="h4" component="h1" gutterBottom>
              Create React App example
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Layout>
  );
}
